// DOM Traversals - selecting one element from a neighboring element.

// Instead of using document.querySelector all the time, we can instead traverse in three directions:
// 1. Downwards
// 2. Sideways
// 3. Upwards


// Traversing Downwards
// 3 ways - querySelector or querySelectorAll, children, & firstElementChild

// To traverse downwards from a specific element, you can use element.querySelector or element.querySelectorAll.

const component = document.querySelector('.component')
const title = document.querySelector('.component__title')

console.log(title)


// children is a property that lets you select direct descendants (elements that are immediately nested in another element). It returns a HTML Collection that updates when children elements are changed.

const list = document.querySelector('.list')
const listItems = list.children

console.log(listItems)

// HTML Collections don’t have the forEach method.
// If you want to loop over a HTML Collection with forEach, you need to convert it into an array with Array.from.

const listArray = Array.from(listItems)

listArray.forEach(item => {
    console.log(listArray.indexOf(item), item)
})

// Selecting a specific child

const itemOne = listItems[0]
const itemTwo = listItems[1]
const itemThree = listItems[2]

console.log('Item One:', itemOne)
console.log('Item Two:', itemTwo)
console.log('Item Three:', itemThree)

// Selecting the first child using firstElementChild

const firstChild = list.firstElementChild

console.log("First Child:", firstChild)


// Traversing Upwards
// 2 ways - parentElement & closest

// parentElement is a property that lets you select the parent element.

const firstListItem = document.querySelector('li')
const anotherListVariable = firstListItem.parentElement

console.log(anotherListVariable) // parentElement is great for selecting one level upwards.

// closest lets you select the closest ancestor element that matches a selector.
// const closestAncestor = Element.closest(selector)

const firstLink = document.querySelector('a')
const closestListToFirstLink = firstLink.closest('.list') // That's right! Die from my absurd variable naming.

// Note: closest starts searching from the current element, then proceeds upwards until it reaches the document. It stops and returns the first element it finds.

const firstLinkThroughClosest = firstLink.closest('a')

console.log(firstLinkThroughClosest) // Basically, it will return itself since it is the closest 'a' to itself.


// Traversing Sideways
// nextElementSibling & previousElementSibling

// You can select the next element with nextElementSibling.
// const nextElem = Node.nextElementSibling

const secondListItem = firstListItem.nextElementSibling
console.log('Second list item:', secondListItem)

const whatAboutThis = firstLink.nextElementSibling
console.log(whatAboutThis) // Returns null kasi wala na siyang sibling sa loob ng 'li'... interesting

// Likewise, you can select the previous element with previousElementSibling.

const fourthListItem = listItems[3]
const thirdListItem = fourthListItem.previousElementSibling
console.log('The list item before the fourth:', thirdListItem)


// Combining parentElement, children, and index
// This method lets you select a specific sibling.

// Select the fourth item from the first item
const firstItem = document.querySelector('li')
const fourthItem = firstItem.parentElement.children[3]

console.log(fourthItem)


// Exercise!
console.log('\nExercise outputs:')
// Practice traversing the DOM with the methods taught in this lesson.

// 1. Select .characters with document.querySelector
const characters = document.querySelector('.characters')
console.log('1.', characters)

// 2. Select .humans from .characters
const humansCharactersList = characters.querySelector('.humans')
console.log('2.', humansCharactersList)

// 3. Select all humans with querySelectorAll, starting from .humans
const humansCharacters = humansCharactersList.querySelectorAll('li')
console.log('3.', humansCharacters)

// 4. Select all hobbits with children
const hobbitsCharacters = document.querySelector('.hobbits').children
console.log('4.', hobbitsCharacters)

// 5. Select the Merry (the hobbit)
const merryTheHobbit = hobbitsCharacters[2]
console.log('5.', merryTheHobbit)

// 6. Select .elves from Merry
const elvesCharactersList = merryTheHobbit.closest('.characters').querySelector('.elves')

// const elvesCharactersList = merryTheHobbit.parentElement.nextSiblingElement.nextSiblingElement
console.log('6.', elvesCharactersList)

// 7. Select Glorfindel from .elves
const glorfindelTheElf = elvesCharactersList.querySelectorAll('li')[1]

// const glorfindelTheElf = elvesCharactersList.children[1]
console.log('7.', glorfindelTheElf)

// 8. Select Elrond from Glorfindel
const elrondTheElf = glorfindelTheElf.nextElementSibling
console.log('8.', elrondTheElf)

// 9. Select Legolas from Glorfindel
const legolasTheElf = glorfindelTheElf.previousElementSibling
console.log('9.', legolasTheElf)

// 10. Select the .characters div from Nazgûl
const nazgûl = document.querySelector('.enemies').children[1]
const anotherCharactersVariable = nazgûl.parentElement.parentElement

// const anotherCharactersVariable = nazgûl.closest('.characters')
console.log('10.', anotherCharactersVariable)