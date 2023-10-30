const openModalBtn = document.querySelector('.open-modal')
const closeModalBtn = document.querySelector('.close-modal')

function modalToggle() {
    document.body.classList.toggle('modal-is-open')
}

openModalBtn.addEventListener('click', modalToggle)
closeModalBtn.addEventListener('click', modalToggle)


// Closing the modal
const modalOverlay = document.querySelector('.modal-overlay')

// modalOverlay.addEventListener('click', e => {
//     document.body.classList.remove('modal-is-open')
//     console.log(e.target)
// })

// Preventing modal from closing when clicked

// Don't use stopPropagation
// 
// modal.addEventListener('click', e => {
//     e.stopPropagation()
// })

modalOverlay.addEventListener('click', e => {
    if (!e.target.closest('.modal')) {
        document.body.classList.remove('modal-is-open')
    }
})