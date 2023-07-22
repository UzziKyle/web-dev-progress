const modalOnBtn = document.querySelector('.modal-on')
const modalOffBtn = document.querySelector('.modal-off')

function modalVisibility() {
    document.body.classList.toggle('modal-is-visible')
}

modalOnBtn.addEventListener('click', modalVisibility)
modalOffBtn.addEventListener('click', modalVisibility)