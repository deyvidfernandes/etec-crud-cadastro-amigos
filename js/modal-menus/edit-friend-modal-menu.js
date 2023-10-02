import * as modal from './modal.js';

const editButton = document.getElementById("edit-friend-button")




const modalWindowResponse = `
<div class="response-modal-content">
    <div class="message" id="edit-friend-message">
        <i id="response-icon"></i>
        <p id="response-message"></p>
    </div>
</div>
`


editButton.addEventListener("click", () => {
    const friendID = document.getElementById('context-menu').getAttribute('selected-friend-id')
    const friendName = document.getElementById('friend-' + friendID).children[1].innerText
    const friendNickname = document.getElementById('friend-' + friendID).children[2].innerText
    const friendEmail = document.getElementById('friend-' + friendID).children[3].innerText


    const innerHTML = `
    <div class="modal-content">
    <h2>Editar Amigo (Cód: ${friendID}) </h2>
            <hr>
            <form action="" id="edit-friend-form">
                <div class="input-container">
                    <label for="nome">Nome</label>
                    <input type="text" name="nome" id="input-nome-editFriend" placeholder="${friendName}">
                </div>
                <div class="input-container">
                    <label for="apelido">Apelido</label>
                    <input type="text" name="apelido" id="input-apelido-editFriend" placeholder="${friendNickname}">
                </div>
                <div class="input-container">
                    <label for="email">Email</label>
                    <input type="text" name="email" id="input-email-editFriend" placeholder="${friendEmail}">
                </div>
                <div class="button-container">
                <button type="button" id="cancelAddFriend-button">Cancelar</button>
                    <button type="submit" id="editFriend-button">Atualizar</button>
                </div>
            </form>
        </div>
    `
    const editWindow = new modal.ModalWindow("40rem", "55rem", innerHTML)
    editWindow.show()
    
    const closeButton = document.getElementById("cancelAddFriend-button")
        
    closeButton.addEventListener("click", () => {
        editWindow.close()
    })

    document.forms['edit-friend-form'].addEventListener('submit', (event) => {
        event.preventDefault();
        // TODO do something here to show user that form is being submitted
        const form = document.getElementById('edit-friend-form')
        const friendIDInput = document.createElement('input')
        friendIDInput.setAttribute('name', 'friendID')
        friendIDInput.setAttribute('value', friendID)
        friendIDInput.setAttribute('type', 'hidden')
        form.appendChild(friendIDInput)
        const formData = new FormData(form);
        console.log(formData)

        fetch('backend/update-friend.php', {
            method: 'POST',
            headers: {
                'X-HTTP-Method-Override': 'PUT'
            },
            body: formData
        }).then((response) => {
            console.log(response)
            editWindow.setInnerHTML(modalWindowResponse)
            const message = document.getElementById('edit-friend-message')
            const responseIcon = document.getElementById('response-icon')
            const responseMessage = document.getElementById('response-message')

            if (!response.ok) {
                message.setAttribute('status', 'error')
                responseIcon.className = "fa-regular fa-circle-xmark"
                responseMessage.innerText = "A atualização falhou"
            } else {
                message.setAttribute('status', 'success')
                responseIcon.className = "fa-regular fa-circle-check"
                responseMessage.innerText = "Amigo atualizado!"
            }
            setTimeout( () => {
                editWindow.close()
                location.reload()
            }, 800)
            // or response.text() or whatever the server sends
        }).then(body => {
            //
        }).catch((error) => {
            console.error('Erro:', error);
        });
    })  
})
