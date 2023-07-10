const openModalBtn = document.querySelector('.open-modal')
const closeModalBtn = document.querySelector('.close-modal')
const buttons = document.querySelectorAll('button')
function modalToggle() {
    document.body.classList.toggle('modal-is-open')
    buttons.forEach(function (button) {
        button.classList.toggle('modal-is-open')
        console.log('Foreach is working and I don\'t know how it happened.')
        console.log('')
    })
}

openModalBtn.addEventListener('click', modalToggle)
closeModalBtn.addEventListener('click', modalToggle)