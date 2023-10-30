// Using Event Delegation
const accordionContainer = document.querySelector('.accordion-container')

accordionContainer.addEventListener('click', e => {
    const accordionHeader = e.target.closest('.accordion__header')
    if (accordionHeader) {
        const accordion = accordionHeader.parentElement
        accordion.classList.toggle('is-open')
    }
})