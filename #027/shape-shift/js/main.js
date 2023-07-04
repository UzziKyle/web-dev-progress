const circle = document.querySelector('.btn-circle')
const square = document.querySelector('.btn-square')
const triangle = document.querySelector('.btn-triangle')

const shape = document.querySelector('.shape')

circle.addEventListener('click', function () {
    shape.className = 'shape'
    shape.classList.add('is-circle')
})

square.addEventListener('click', function () {
    shape.className = 'shape'
    shape.classList.add('is-square')
})

triangle.addEventListener('click', function () {
    shape.className = 'shape'
    shape.classList.add('is-triangle')
})