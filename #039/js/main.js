// Getting CSS using JavaScript

// Getting inline styles
// Inline styles are styles that are present in the HTML in the style attribute.
// To get inline styles, use the style property
// const element = document.querySelector('.element')

const fancyText = document.querySelector('.fancy-text')

const fancyTextColor = fancyText.style.color
console.log(`The value fancyTextColor is ${fancyTextColor}.`)

const fancyTextDisplay = fancyText.style.display
console.log(`The value fancyTextDisplay is ${fancyTextDisplay}.`)


// Getting computed styles
// If your styles are written in the CSS file, you need to get the computed style. To do so, you can use getComputedStyle.
// const style = getComputedStyle(Element, pseudoElement)

const simpleText = document.querySelector('.simple-text')

const simpleTextStyle = getComputedStyle(simpleText)
console.log(simpleTextStyle) // Returns an object that contains every CSS property and their respective values.

const simpleTextColor = simpleTextStyle.color
console.log(`The value of simpleTextColor is ${simpleTextColor}.`)

// Note: getComputedStyle is read-only. You cannot set a CSS value with getComputedStyle.
// Note2: getComputedStyle gets the computed CSS values. You’ll get px from getComputedStyle, not relative units like em and rem.


// Getting styles from pseudo elements

const circle = getComputedStyle(simpleText, '::after')
console.log(circle)

const circleBackgroundColor = circle.backgroundColor
console.log(`The value of circleBackgroundColor is ${circleBackgroundColor}.`)


// Exercise!
// Say you have the following HTML. Get its styles with both the style property and getComputedStyle. What’s the difference between the values of these properties?
{/* <div style="color: red; background-color: white; font-size: 5em">
  Big red text!
</div> */}

const div = document.querySelector('div')
console.log(div)

// using style 
let divStyle = div.style
console.log('divStyle using style:', divStyle)

let divColor = div.style.color
let divBackgroundColor = div.style.backgroundColor
let divFontSize = div.style.fontSize

console.log('Using style:', divColor, divBackgroundColor, divFontSize)

// using getComputedStyle
divStyle = getComputedStyle(div)
console.log('divStyle using style:', divStyle)

divColor = divStyle.color
divBackgroundColor = divStyle.backgroundColor
divFontSize = divStyle.fontSize

console.log('Using getComputedStyle:', divColor, divBackgroundColor, divFontSize)

// Answer? getComputedStyle returns computed values? HAHA
// Just kidding.

// style returns all the properties, however it only returns values which has been declared/set, the rest of the properties does not contain any value (which means it doesn't return default values)

// getComputedStyle returns all the properties and their respective values, even if the value is 0 or none (which means default values)

// style returns values in text or em
// getComputedStyle returns values in rgba() or px. wth are these called? haha