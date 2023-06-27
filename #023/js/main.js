// alert('JavaScript is linked!')

// IF/ELSE STATEMENTS

/*
The if/else statement helps to control what your program does in specified situations. 
Since it controls how your program runs, it is also called a control flow statement.
*/

/*
if (condition) {
    // Do something
  } else {
    // Do some other thing
  }
*/

let x = 0

if (x !== 2) {
    console.log('x is not equals to 2')
} else {
    console.log('x is two')
}

// Truthy and Falsey
// JavaScript doesn't really check if a condition is true or false. 
// Instead, it checks whether the statement is truthy or falsey

// Falsey expressions are expressions that evaluates to false when it’s converted into a Boolean in JavaScript.
// Six possible falsey values:
const falsey1 = false
const falsey2 = undefined
const falsey3 = null
const falsey4 = 0
const falsey5 = ''
const falsey6 = NaN

console.log(falsey1, falsey2, falsey3, falsey4, falsey5, falsey6)

if  (falsey5) {
    console.log('String is not empty')
} else {
    console.log('String is empty')
}

// The given condition is falsey, not false, that's why it didn't run the first block.

// Truthy expressions are the opposite. 
// Truthy expressions are expressions that evaluates to true when it’s converted into a Boolean.
// Truthy values are all values that’s not falsey.

// The process of converting truthy and falsey values to true or false is called AUTOMATIC TYPE CONVERSION.


// Comparison Operators
// Ito naman 'yung i-check whether true or false 'yung given condition, kind of. 
// Almost same lang din 'yung operators ng JavaScript sa Python.
// May dagdag lang na strictly equal (===) at strictly unequal (!==) sa former.

// Ang weird pala kasi ni JS. Take a look.

console.log(24 == '24') // true
console.log(24 != '24') // false

// Bakit naman equal ang 24 na int sa 24 na str??? HAHAHA

// Using strictly equal and strictly unequal operators, we can avoid this 'confusion'

console.log(24 !== '24') // true
console.log(24 === '24') // false


// The reason pala why ganiyan is because JavaScript is a loosely-typed language, meaning that it doesn't care kung anong type ang ipaglalagay mo sa variables. Siya na bahala afterwards.

// Best practice? always use strict operators!!!

// EXERCISE
// Controlling the flow of a program with if/else statements is incredibly important. Try answering the following questions.

// 1. James is 22 years old, Valerie is 25 years old, Kenneth is 27 years old.
//      a. Make an if statement to check if you are younger than James.
//      b. Make an else if statement to check if you are older than Valerie.
//      c. Make another else if statement to check if you’re as old as Kenneth.

const me = 20
const james = 22
const valerie = 25
const kenneth = 27

if (me < james) {
    console.log("I'm younger than James. I'm only " + me + ".")
} else if (me > valerie) {
    console.log("I'm older than Valerie at the age of " + me + ".")
} else if (me === kenneth) {
    console.log("I'm as old as Kenneth.")
} else {
    console.log("Something went wrong.")
}


// Remember, truthy is anything that's not falsey, including an empty object or array
const someValue = {}

if (someValue) {
    console.log('Truthy')
} else {
    console.log('Falsey')
}