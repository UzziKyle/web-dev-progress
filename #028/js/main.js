const openButton = document.querySelector('.open-btn')
const closeButton = document.querySelector('.close-btn')
const popup = document.querySelector('.popup-container')

function popupToggle() {
    popup.classList.toggle('is-visible')
}

openButton.addEventListener('click', popupToggle)
closeButton.addEventListener('click', popupToggle)