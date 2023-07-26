// Finding an element's size and position
// Sometimes, you need to know the width and height of your element. You may also need to know where the element is located in the document.

// const domRect = element.getBoundingClientRect()

// domRect is an object that contains 6 values:
// 1. top – the distance from the top of the document to the top of the element
// 2. bottom – the distance from the top of the document to the bottom of the element
// 3. left – the distance from the left of the document to the left of the element
// 4. right – the distance from the left of the document to the right of the element
// 5. width – the width of the element
// 6. height – the height of the element

// There are two more values, x and y, but they mean the same thing as left and top.

// Exercise!
// Go to any web page, open up your console and get use getBoundingClientRect to get at the DomRect of at least one element. You should see eight values.

const navRect = document.querySelector('nav').getBoundingClientRect()
console.log(navRect)

const socMedContainer = document.querySelector('.social-media-container').getBoundingClientRect()
console.log(socMedContainer)