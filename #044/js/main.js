// Warm-up para to get on track ulit sa web dev...

const carousel = document.querySelector('.carousel')
const prevButton = carousel.querySelector('.prev-button')
const nextButton = carousel.querySelector('.next-button')

const contents = carousel.querySelector('.carousel__contents')

prevButton.addEventListener('click', e => {
    const currentSlide = contents.querySelector('.is-selected')
    const prevSlide = currentSlide.previousElementSibling
    const destination = getComputedStyle(prevSlide).left
    
    contents.style.left = destination

    currentSlide.classList.remove('is-selected')
    prevSlide.classList.add('is-selected')

    if (!prevSlide.previousElementSibling) {
        prevButton.setAttribute('hidden', true)
    }

    nextButton.removeAttribute('hidden')
})

nextButton.addEventListener('click', e => {
    const currentSlide = contents.querySelector('.is-selected')
    const nextSlide = currentSlide.nextElementSibling
    const destination = getComputedStyle(nextSlide).left

    contents.style.left = '-' + destination

    currentSlide.classList.remove('is-selected')
    nextSlide.classList.add('is-selected')

    // Hide the next button if last slide
    if (!nextSlide.nextElementSibling) {
        nextButton.setAttribute('hidden', true)
    }

    prevButton.removeAttribute('hidden')
})
