import * as modal from './modal.js';

const addButton = document.getElementById("add-friend-button")


const innerHTML = `

<div class="modal-content">
    <h2>Cadastrar Amigo</h2>
    <hr>
    <form method="post" action="backend/add-friend.php" id="add-friend-form">
        <div class="input-container">
            <label for="nome">Nome</label>
            <input type="text" name="nome" id="input-nome-addFriend">
        </div>
        <div class="input-container">
            <label for="apelido">Apelido</label>
            <input type="text" name="apelido" id="input-apelido-addFriend">
        </div>
        <div class="input-container">
            <label for="email">Email</label>
            <input type="text" name="email" id="input-email-addFriend">
        </div>
        <div class="button-container">
            <button type="button" id="cancelAddFriend-button">Cancelar</button>
            <button type="submit" id="addFriend-button">Cadastrar</button>
        </div>
    </form>
</div>
`

const modalWindowResponse = `
<div class="response-modal-content">
    <div class="message" id="add-friend-message">
        <i id="response-icon"></i>
        <p id="response-message"></p>
    </div>
</div>
`


addButton.addEventListener("click", () => {
    const addWindow = new modal.ModalWindow("40rem", "55rem", innerHTML)
    addWindow.show()
    
    const closeButton = document.getElementById("cancelAddFriend-button")
        
    closeButton.addEventListener("click", () => {
        addWindow.close()
    })

    const addButton = document.getElementById("addFriend-button")
        
    addButton.addEventListener("click", () => {
        const modalWindowContent = document.getElementById("add-friend-modal-content")
        // modalWindowContent.style.display = "none"
    })



    document.forms['add-friend-form'].addEventListener('submit', (event) => {
        event.preventDefault();

        // TODO do something here to show user that form is being submitted
        fetch(event.target.action, {
            method: 'POST',
            body: new URLSearchParams(new FormData(event.target)) // event.target is the form
        }).then((response) => {
            console.log(response)
            addWindow.setInnerHTML(modalWindowResponse)
            const message = document.getElementById('add-friend-message')
            const responseIcon = document.getElementById('response-icon')
            const responseMessage = document.getElementById('response-message')

            if (!response.ok) {
                message.setAttribute('status', 'error')
                responseIcon.className = "fa-regular fa-circle-xmark"
                responseMessage.innerText = "O cadastro falhou"
            } else {
                message.setAttribute('status', 'success')
                responseIcon.className = "fa-regular fa-circle-check"
                responseMessage.innerText = "Amigo cadastrado!"
            }
            setTimeout( () => {
                addWindow.close()
                location.reload()
            }, 800)
            // or response.text() or whatever the server sends
        }).then((body) => {
            // TODO handle body
        }).catch((error) => {
            // TODO handle error
        });
    })  
})
