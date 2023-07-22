// Selecting multiple elements
// querySelectorAll() lets you select multiple elements at once.

const boxes = document.querySelectorAll('.box')

// querySelectorAll() returns a NodeList, a list of nodes as the name suggests. It is an array-like objectwith a length properties and has numbers as keys.
boxes.forEach(box => {
    box.classList.add('blue')
})


// Exercise!
// Practice selecting Elements with querySelectorAll
console.log('\nExercise outputs:')

// 1. Select all good guys with attributes
const goodGuys = document.querySelectorAll('[data-type="good-guy"]')

// 2. Give good guys a yay class
goodGuys.forEach(goodGuy => goodGuy.classList.add('yay'))

// 3. Select all villains with attributes
const villains = document.querySelectorAll('[data-type="villain"]')

// 4. Give villains a nay class
villains.forEach(villain => villain.classList.add('nay'))

// 5. Select all characters through the character class
const characters = document.querySelectorAll('.character')

// 6. Give all characters a star-wars class
characters.forEach(character => character.classList.add('star-wars'))

console.log(characters)