// Changing Classes

// Add class
// Element.classList.add('className')

const blueCircle = document.querySelector('.circle')

blueCircle.classList.add('blue')


// Add multiple classes
// Element.classList.add('firstClass', 'secondClass', 'thirdClass')

const firstCircle = document.querySelector('.circle')

firstCircle.classList.add('blue', 'anotherClass', 'thirdClass')


// Remove class
// Element.classList.remove('className')

firstCircle.classList.remove('thirdClass')


// Remove multiple classes
// Element.classList.remove('firstClass', 'secondClass', 'thirdClass')

firstCircle.classList.remove('blue', 'anotherClass')


// Check if class exists
// Element.classList.contains('className')

const div = document.querySelector('div')

if (div.classList.contains('container')) {
    console.log('First div has .container')
} else {
    console.log('First div does not contain .container')
}


// Toggling a class
/*

if (element.classList.contains('className')) {
  element.classList.remove('className')
} else {
  element.classList.add('className')
}

*/

if (firstCircle.classList.contains('blue')) {
    firstCircle.classList.remove('blue')
    console.log('.blue has been removed from firstCircle.')
} else {
    firstCircle.classList.add('blue')
    console.log('.blue has been added to firstCircle.')
}


// Exercise!
console.log('\nExercise')

// 1. Adding class
const addRed = document.querySelector('.add')

addRed.classList.add('red')

console.log(addRed)


// 2. Removing class
const remove = document.querySelector('.remove')

remove.classList.remove('remove')
console.log(remove)


// 3. Checking if class exists
const contains1 = document.querySelector('.contains1')

console.log(`3.) ${contains1.classList.contains('blue')}`)

const contains2 = document.querySelector('.contains2')

console.log(`4.) ${contains2.classList.contains('blue')}`)


// 4. Toggling class
const toggle = document.querySelector('.toggle')

console.log(`5.) ${toggle.classList.contains('red')}`)

if (toggle.classList.contains('red')) {
    toggle.classList.remove('red')
} else {
    toggle.classList.add('red')
}

console.log(toggle)