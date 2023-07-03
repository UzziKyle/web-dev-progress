// Listening To Events

// Element.addEventListener('event-name', function () {})

const button = document.querySelector('.btn1')

/* 
// There is a much easier way to do this!

button.addEventListener('click', function () {

    // Listening to an event
    console.log('Button is clicked!')

    const aside = document.querySelector('aside')
    const circles = document.querySelectorAll('.circle')

    // Changing the DOM
    if (button.classList.contains('is-clicked')) {
        button.classList.remove('is-clicked')
        aside.classList.remove('button-is-clicked')
        circles.forEach(circle => {
            circle.classList.remove('button-is-clicked')
        })
    } else {
        button.classList.add('is-clicked')
        aside.classList.add('button-is-clicked')
        circles.forEach(circle => {
            circle.classList.add('button-is-clicked')
        })  // I figured this out on my own... with a little bit of help from the internet. At least na-isip ko rin siya haha.
    }
})
*/


// The easy way
button.addEventListener('click', function () {
    console.log('Button is clicked!')

    const aside = document.querySelector('aside')
    const circles = document.querySelectorAll('.circle')

    button.classList.toggle('is-clicked')
    aside.classList.toggle('button-is-clicked')
    circles.forEach(circle => {
        circle.classList.toggle('button-is-clicked')
    })
})