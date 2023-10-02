
const friendsTableRows = Array.from(document.getElementsByClassName("friendsList__row"))
const tableContainer = document.getElementById("table-container")

const contextMenu = document.createElement("context-menu")
contextMenu.id = "context-menu"
contextMenu.innerHTML = `
<button id="edit-friend-button">
    <i class='fa-solid fa-user-pen'></i>
</button> 
<button id="remove-friend-button">
    <i class='fa-solid fa-user-xmark'></i>
</button>
`

tableContainer.appendChild(contextMenu)

let mouseOverContextMenu = false
let mouseOverRow = false

function showContextMenu(element, idx) {
    contextMenu.setAttribute('selected-friend-id', friendsTableRows[idx].children[0].innerHTML)
    const tr_h = element.offsetHeight
    const tr_relY = (idx + 1) * tr_h
    
    contextMenu.style.top = (tr_relY) / 10 + "rem";
    contextMenu.style.left = -contextMenu.offsetWidth / 10 + "rem";
    contextMenu.classList.add("menu-slideIn");
    // Adicione a classe de animação
}

function hideContextMenu() {
    // Remova a classe de animação
    contextMenu.classList.remove("menu-slideIn");
    contextMenu.classList.add("menu-slideOut");
    setTimeout(() => {
        if (!mouseOverContextMenu) {
            contextMenu.style.left = "-100vh";
            contextMenu.classList.remove("menu-slideOut");
        }
    }, 280)
}

contextMenu.addEventListener("mouseover", () => {
    mouseOverContextMenu = true;
});

contextMenu.addEventListener("mouseout", () => {
    mouseOverContextMenu = false;
    setTimeout(() => {
        if (!mouseOverContextMenu && !mouseOverRow) {
            hideContextMenu()
        }
    }, 100)
});

friendsTableRows.forEach((element, idx) => {

    element.addEventListener("mouseover", () => {
        mouseOverRow = true
        showContextMenu(element, idx)
    })

    element.addEventListener("mouseout", () => {
        mouseOverRow = false
        setTimeout(() => {
            if (!mouseOverContextMenu && !mouseOverRow) {
                hideContextMenu()
            }
        }, 100)
        
    });

});