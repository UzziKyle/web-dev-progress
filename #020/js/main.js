// Declaring Variables in JS
// const variableName = 'value'

const appleSale = 10
const appleSold = 3
const appleLeft = appleSale - appleSold

console.log("He's got", appleSale, "apples.")
console.log(appleSold + " were sold.")
console.log("There's only", appleLeft, "apples left.")

// Simple Exercise
let sum = 0
console.log(sum)

let num1 = 300
let num2 = 50

// let sum = num1 + num2 - mali pala ito
// Hindi na pala need i-redeclare kapag mag-reassign.

sum = num1 + num2 
console.log(sum)


// Creating and Calling Functions
/* 
function functionName(parameters) {
  // Do stuff here
}
*/

function sayName(firstName, lastName) {
    console.log("Your first name is " + firstName + ".")
    console.log("Your last name is " + lastName + ".")
    console.log("So, are you "+ firstName, lastName + "?")
}

function fullNameConstructor(firstName, lastName) {
    return firstName + " " + lastName
}

const myFirstName = "Uzziel Kyle"
const myLastName = "Ynciong"

sayName(myFirstName, myLastName)
console.log("Yes. I'm " + fullNameConstructor(myFirstName, myLastName))