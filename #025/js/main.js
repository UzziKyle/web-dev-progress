// Selecting An Element

/*
The document object contains a method called querySelector. It looks like this:

const element = document.querySelector('selector')
*/

const firstSquare = document.querySelector('.square') // Only returns the first instance

console.log(firstSquare)

const allSquares = document.querySelectorAll('.square') // Returns all the instances of the element

console.log(allSquares)

// Exercise
// Practice selecting elements with document.querySelector and element.querySelector. Try using ids, classes, tags and attribute selectors as you select from the following HTML.


// 1. Get the #star-wars-characters list with id and tag selectors.

const characters = document.querySelector('#star-wars-characters')
const characters2 = document.querySelector('ul')

console.log(characters2)


// 2. From the #star-wars-characters list, get the following:

// a. Luke Skywalker with class, tag and attribute selectors
const luke = characters.querySelector('.luke') // All elements have the querySelector method too!
const luke2 = characters.querySelector('li')
const luke3 = characters.querySelector('[data-type="hero"]')

console.log(luke, luke2, luke3)

// b. Yoda with class and attribute selectors
const yoda = characters.querySelector('.yoda')
const yoda2 = characters.querySelector('[data-type="master"]')

console.log(yoda, yoda2)

// c. Darth Vader with class and attribute selectors
const darth = characters.querySelector('.badboy')
const darth2 = characters.querySelector('[data-type="villain"]')

console.log(darth, darth2)

// Bonus learning! 
// Template Literals in JavaScript, equivalent to string formatting in Python
// console.log(`${var}`)

const num = 5
const num2 = 2

console.log(`The number is ${num}. Can also do operations; ${num} + ${num2} = ${num + num2}.`)