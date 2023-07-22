const accordions = Array.from(document.querySelectorAll('.accordion'))

// const firstAccordion = accordions[0]
// const firstAccordionHeader = firstAccordion.querySelector('.accordion__header')

// firstAccordion.addEventListener('click', e => {
//     firstAccordion.classList.toggle('is-open')
// })
// console.log(firstAccordion)
// console.log(firstAccordionHeader)

accordions.forEach(accordion => {
    const accordionHeader = accordion.querySelector('.accordion__header')

    accordionHeader.addEventListener('click', e => {
        accordion.classList.toggle('is-open')
    })
})