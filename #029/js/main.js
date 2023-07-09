const menuButton = document.querySelector('button')
const body = document.body

menuButton.addEventListener('click', e => {
    menuButton.classList.toggle('menu-is-open')
    body.classList.toggle('menu-is-open')
})