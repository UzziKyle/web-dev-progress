const menuBtn = document.querySelector('button')
const body = document.body

menuBtn.addEventListener('click', e => {
    menuBtn.classList.toggle('menu-is-open')
    body.classList.toggle('menu-is-open')
})