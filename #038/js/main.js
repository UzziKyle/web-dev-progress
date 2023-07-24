// Changing CSS w/ JavaScript

/*
// Setting the property
// NOTE: Change 'cssProperty' to any CSS Property, written in camelCase.
Element.style.cssProperty = propertyValue
*/

const sentence = document.querySelector('#sentence')

sentence.style.display = 'block'
sentence.style.color = 'darkblue'
sentence.style.textShadow = '0 0 4px skyblue'
sentence.style.backgroundColor = 'whitesmoke'
sentence.style.width = 'max-content'
// sentence.style.padding = '1rem 2rem'
// sentence.style.borderRadius = '4px'
// sentence.style.boxShadow = '0 2px 4px black'


// Another way to set CSS property
// element.style.setProperty('property', 'value')

sentence.style.setProperty('padding', '1rem 2rem')
sentence.style.setProperty('border-radius', '4px')
sentence.style.setProperty('box-shadow', '0 2px 4px black')


// Exercise!
// Create a button. Do the following when the button is clicked:

const button = document.querySelector('button')

button.addEventListener('click', e => {
    // 1. Change the button’s color
    button.style.color = 'whitesmoke'

    // 2. Change the button’s backgroundColor
    button.style.setProperty('background-color', 'darkblue')

    // 3. Change the button’s width
    button.style.width = '10rem'

    // 4. Change the button’s height
    button.style.setProperty('height', '3rem')
})