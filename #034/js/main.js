// Array Methods

// Finding the position of an item
// const index = array.indexOf(thing)
const array = ['beautiful', 'cutie', 'darling']
const index = array.indexOf('cutie')
console.log(`'Cutie' is in index ${index}.`)

// if thing does not exists, indexOf returns -1
const anotherIndex = array.indexOf('Item that does not exist.')
console.log(`anotherIndex does not exist so indexOf returns ${anotherIndex}.`)

// Adding items to an array
// Three ways - start, end, & middle of an array

// Start
array.unshift('adorable')
console.log(array[0])

// End
array.push('exciting')
console.log(array[array.length - 1])

// Removing items from an array
// Three ways - start, end, & middle of an array

// Start
array.shift()
console.log(array)

array.shift() // To remove 2 or more, use shift() again, and again.
console.log(array)

// End
array.pop()
console.log(array)

array.pop() // To remove 2 or more, use shift() again, and again.
console.log(array)

// Splice Method!!!
// splice() lets you add and remove items from any position
// syntax looks like this: const deletedItems = array.splice(startingIndex, deleteCount, itemsToAdd)

const newArray = []

// Adding with splice()
// Start
newArray.splice(0, 0, 'adorable', 'beautiful')
console.log(newArray)

// End
newArray.splice(newArray.length, 0, 'exciting', 'feather')
console.log(newArray)

// Middle
newArray.splice(newArray.length / 2, 0, 'cutie', 'darling')
console.log(newArray)

// Removing with splice()

// Middle
newArray.splice(newArray.length / 2, 2)
console.log(newArray)

// Start
newArray.splice(0, 2)
console.log(newArray)

// End
newArray.splice(newArray.length - 2, 2)
console.log(newArray)

// Can make a new copy of an array using slice
const newestArray = newArray.slice()

newestArray.push('ADORABLE','BEAUTIFUL')

console.log('newArray:', newArray, 'and its modified copy:',newestArray)

// Exercise
// The following questions require you to make use of the people array provided below. To make like easier for you, use slice to make a copy of the array before answer each question.

let people = [
    'Benjamin Franklin',
    'Thomas Edison',
    'Franklin Roosevelt',
    'Mahatma Gandhi',
    'Napoleon Bonaparte',
    'Abraham Lincoln',
  ]

const peopleTwo = people.slice()
const peopleThree = people.slice()

console.log('\nExercise outputs:')

// 1. What is the index of Mahatma Gandhi in this list of people? Use indexOf.
console.log(people.indexOf('Mahatma Gandhi'), people)

// 2. Add Winston Churchill and Albert Einstein to the start of the list.

//  a. With unshift
peopleTwo.unshift('Winston Churchill')

// b. With splice
peopleTwo.splice(0, 0, 'Albert Einstein')

console.log(peopleTwo)

// 3. Add Charles Darwin and Walt Disney to the end of the list.

//  a. With push
peopleTwo.push('Charles Darwin')

// b. With splice
peopleTwo.splice(peopleTwo.length - 2, 0, 'Walt Disney')

console.log(peopleTwo)

// 4. Add Pablo Picasso and Ludwig van Beethoven after Mahatma Gandhi. Use splice.
peopleTwo.splice(peopleTwo.indexOf('Mahatma Gandhi') + 1, 0, 'Pablo Picasso', 'Ludwig van Beethoven')

console.log(peopleTwo)

// 5. Remove Benjamin Franklin and Thomas Edison
//  a. With shift
peopleThree.shift()
console.log(peopleThree)

//  b. With splice
peopleThree.splice(0, 1)
console.log(peopleThree)

// 6. Remove Napoleon Bonaparte and Abraham Lincoln
//  a. With pop
peopleThree.pop()
console.log(peopleThree)

//  b. With splice
peopleThree.splice(peopleThree.length - 1, 1)
console.log(peopleThree)

// 7. Remove Mahatma Gandhi with splice
people.splice(people.indexOf('Mahatma Gandhi'), 1)
console.log(people)


// A lil bit of For Loops
// For loops works like while loops and for loops in Python. Cool!
// syntax: for (initialExpression; condition; incrementExpression)

// How to make it work like a typical For Loops
for (let person of people) {    // In JS, this is called a for...of loop
    console.log(person)
}

// How to make it similar to Python's while loop
for (let i = 0; i <= 10; i++) {
    console.log(i**2)
}

// Lemme create an object by combining two arrays
const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
const adjectives = [
    'adorable',
    'beautiful',
    'cutie',
    'darling',
    'exciting',
    'feather',
    'good'
]
const lyrics = {} // An object uses curly braces, nalito ako sa kanila ng array 

for (let i = 0; i < letters.length; i++) {
    lyrics[letters[i]] = adjectives[i]
}

console.log(lyrics)

// Exercise!
// Practice using the for and for of to loop through an array of numbers (given below). Do the following tasks:
const numbers = [1, 12, 4, 18, 9, 7, 11, 3, 50, 5, 6]

console.log('\nExercise outputs:')
// 1. Loop through the numbers and console.log each number within
for (let i = 0; i < numbers.length; i++) { // For loop
    if (i === 0) {
        console.log('1.1)')
    }

    console.log(numbers[i])
} 

for (let number of numbers) { // For...of loop
    if (number === numbers[0]) {
        console.log('1.2')
    }
    console.log(number)
}

// 2. Loop through the numbers. If the numbers are greater than 5, console.log them
for (let i = 0; i < numbers.length; i++) { // For loop
    if (i === 0) {
        console.log('2.1')
    }   else if (numbers[i] > 5) {
        console.log(numbers[i])
    }
}

for (let number of numbers) { // For...of loop
    if (number === numbers[0]) {
        console.log('2.2')
    }   else if (number > 5) {
        console.log(number)
    }
}

//  3. Create a new array. Add all numbers that are greater than 10 into this new array. (Hint: You have to loop through the numbers array first)
const tenAboveFor = []
for (let i = 0; i < numbers.length; i++) { // For loop
    if (i === 0) {
        console.log('3.1')
    }   else if (numbers[i] > 10) {
        tenAboveFor.push(numbers[i])
    }
}
console.log(tenAboveFor)

const tenAboveForOf = []
for (let number of numbers) { // For...of loop
    if (number === numbers[0]) {
        console.log('3.2')
    }   else if (number > 10) {
        tenAboveForOf.push(number)
    }    
}

console.log(tenAboveForOf)

// 4. Create a new array. Multiply all numbers by 5 and put them into the new array. (Hint: You have to loop through the numbers array first)
const fiveTimesFor = []
for (let i = 0; i < numbers.length; i++) { // For loop
    if (i === 0) {
        console.log('4.1')
    }

    fiveTimesFor.push(numbers[i] * 5)
}

console.log(fiveTimesFor)


const fiveTimesForOf = []
for (let number of numbers) {
    if (number === numbers[0]) {
        console.log('4.2')
    }

    fiveTimesForOf.push(number * 5)
}

console.log(fiveTimesForOf)