// Callbacks

// A callback is a function that is passed into another function as an argument to be executed later.

const button = document.querySelector('button')

function changeColor() {
    button.classList.toggle('color-changed')
}

button.addEventListener('click', changeColor) // Hindi na need ng '()' kapag i-pass 'yung function as argument.