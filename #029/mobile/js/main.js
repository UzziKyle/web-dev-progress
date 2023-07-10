const menuOpen = document.querySelector('.menu-open')
const menuClose = document.querySelector('.menu-close')
const body = document.body

function menuToggle () {
    menuOpen.classList.toggle('menu-is-open')
    body.classList.toggle('menu-is-open')
}

menuOpen.addEventListener('click', menuToggle)
menuClose.addEventListener('click', menuToggle)