import * as modal from './modal.js';

const deleteButton = document.getElementById("remove-friend-button")

const modalWindowResponse = `
<div class="response-modal-content">
    <div class="message" id="delete-friend-response-message">
        <i id="response-icon"></i>
        <p id="response-message"></p>
    </div>
</div>
`

deleteButton.addEventListener("click", () => {
    const friendID = document.getElementById('context-menu').getAttribute('selected-friend-id')
    const friendName = document.getElementById('friend-' + friendID).children[1].innerText
    const friendNickname = document.getElementById('friend-' + friendID).children[2].innerText
    const friendEmail = document.getElementById('friend-' + friendID).children[3].innerText


    const innerHTML = `
    <div id="delete-modal-content">
        <div class="message" id="delete-friend-message">
            <i class="fa-regular fa-circle-question" id="response-icon"></i>
            <p>Você realmente deseja remover ${friendName}?</p>
        </div>
        <div class="button-container">
            <button id='cancel-delection'>Cancelar</button>
            <button id='confirm-delection'>Confirmar</button>
        </div>
    </div>
    `
    const deleteWindow = new modal.ModalWindow("40rem", "55rem", innerHTML)
    deleteWindow.show()
    
    const closeButton = document.getElementById("cancel-delection")
        
    closeButton.addEventListener("click", () => {
        deleteWindow.close()
    })

    const confirmButton = document.getElementById('confirm-delection')

    confirmButton.addEventListener('click', () => {
        // TODO do something here to show user that form is being submitted
        const formData = new FormData()
        formData.append('friendID', friendID)

        fetch('backend/delete-friend.php', {
            method: 'POST',
            headers: {
                'X-HTTP-Method-Override': 'DELETE'
            },
            body: formData
        }).then((response) => {
            console.log(response)
            deleteWindow.setInnerHTML(modalWindowResponse)
            const message = document.getElementById('delete-friend-response-message')
            const responseIcon = document.getElementById('response-icon')
            const responseMessage = document.getElementById('response-message')

            if (!response.ok) {
                message.setAttribute('status', 'error')
                responseIcon.className = "fa-regular fa-circle-xmark"
                responseMessage.innerText = "Ocorreu um erro, o amigo não foi removido"
            } else {
                message.setAttribute('status', 'success')
                responseIcon.className = "fa-regular fa-circle-check"
                responseMessage.innerText = "Amigo removido"
            }
            setTimeout( () => {
                deleteWindow.close()
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
