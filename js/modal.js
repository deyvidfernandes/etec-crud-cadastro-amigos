export class ModalWindow {
    element;
    constructor(w, h, innerHTML, id) {
        this.element = document.createElement("modal")
        document.body.appendChild(this.element)
        this.element.style.setProperty('--this-width', w)
        this.element.style.setProperty('--this-height', h)
        this.element.innerHTML = innerHTML
        this.element.id = id
    }
    show() {
        overlayDiv.style.display = "flex"
        this.element.style.display = "flex"
        this.element.classList.remove('modal-fadeOut')
        this.element.classList.add('modal-fadeIn')
        overlayDiv.classList.remove('modal-fadeOut')
        overlayDiv.classList.add('modal-fadeIn')
    }
    close() {
        this.element.classList.add('modal-fadeOut')
        overlayDiv.classList.remove('modal-fadeIn')
        overlayDiv.classList.add('modal-fadeOut')
        setTimeout(() => {
            this.remove()
            overlayDiv.style.display = "none"
        }, 230)
    }
    setInnerHTML(innerHTML) {
        this.element.innerHTML = innerHTML
    }
    remove() {
        this.element.remove()
    }
}

const overlayDiv = document.createElement("div")
overlayDiv.id = "overlay"
document.body.appendChild(overlayDiv)