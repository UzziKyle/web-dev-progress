// Flow of a function and Arrow functions

// This is an example of a normal function syntax
function add5(num) {
    return num + 5
}

const number = add5(7)

console.log(number)

/*
An arrow function is denoted by the fat arrow (=>).

const arrowFunction = (arg1, arg2) => {
  // Do something
}

arrow functions is like lambda in Python, they are anonymous functions.
*/

const addTwoNumbers = (num1, num2) => {
    return num1 + num2
}

const totalNumber = addTwoNumbers(number, add5(number))

console.log(totalNumber)

/*
If an arrow function has zero parameters, we can replace it with an underscore.
const zeroArgs = () => {
  // Do something
}
const zeroArgsWithUnderscore = _ => {
  // Do something
}
*/

const motivationalSpeaker = _ => {
    return 'Ganiyan talaga ang buhay. Laban lang!'
}

console.log(motivationalSpeaker())

/*
Else, if an arrow function has only one parameter, we can remove the parenthesis.
const oneArg = arg1 => {
  // Do something
}
const oneArgWithParenthesis = arg1 => {
  // Do something
}
*/

const add3 = num => {
    return num + 3
}

const newNumber = add3(4)

console.log(newNumber)

// Else, we use the full arrow function syntax.

/* 
Implicit returns

Arrow functions automatically create a return statement if two conditions are present:

- You write only one line of code in the function
- That line of code is not enclosed in curly braces ({})

This implicit return feature lets you reduce three lines of code into a single line.
*/

// Why use Arrow Functions? Hint: One great use of anonymous fuctions is through callbacks in event listeners. More on this daw later.

// EXERCISE!
// Make a function named ten that takes in zero arguments and return the value 10. Try using both () and _ syntax.
function ten() {
    return 10
}
const funcTen = ten()

const arrTen1 = _ => 10
const arrowFuncTen1 = arrTen1()
const arrTen2 = () => 10
const arrowFuncTen2 = arrTen2()

console.log("Normal Function Output:", funcTen)
console.log("Arrow Function Outputs: " + arrowFuncTen1  + ", " + arrowFuncTen2)    


// Make a function named logger that takes in one argument. It logs the argument you passed into it. Try it with and without parenthesis ().
const logger = arg => {
    console.log(arg)
}

logger('Katabi ko si Chambe. Ayaw na mawawala ako sa paligid niya.')

const logger2 = (arg) => {
    console.log(arg)
}

logger2('Ilang araw pa lang ay dugyot na siya ulit. Ayayay')


// Make a function called add that adds two numbers together. Try it with and without implicit returns.
const add = (num1, num2) => {
    return num1 + num2          // Non Implicit Return
}

const sumThreeFive = add(3, 5)
console.log("3 + 5 =",sumThreeFive)

const addImplicitly = (num1, num2) => num1 + num2 // Implicit Return
const sumTwoFour = addImplicitly(2, 4)

console.log("2 + 4 =", sumTwoFour)


// Make a function called multiply that multiplies two numbers together. Try it with and without implicit returns.
const multiply = (num1, num2) => {
    return num1 * num2
}

const productThreeFive = multiply(3, 5)
console.log("3 * 5 =", productThreeFive)

const multiplyImplicitly = (num1, num2) => num1 * num2
const productTwoFour = multiplyImplicitly(2, 4)
console.log("2 * 4 =", productTwoFour)


// P.S. Nakakalimutan ko pa rin most of the time gumamit ng 'const' keyword sa pag-dedeclare ng variables. AYAYAY