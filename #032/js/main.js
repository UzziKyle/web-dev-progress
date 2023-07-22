const dropdownContainer = document.querySelector('.dropdown')
const dropdownOpener = document.querySelector('.dropdown-anchor')
const bgBody = document.querySelector('.bg')

dropdownOpener.addEventListener('click', e => {
    dropdownContainer.classList.toggle('dropdown-is-visible')
})

bgBody.addEventListener('click', e => {
    if (dropdownContainer.classList.contains('dropdown-is-visible')) {
        dropdownContainer.classList.remove('dropdown-is-visible')
    }
})