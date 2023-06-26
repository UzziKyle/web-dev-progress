alert('Warning: This webpage may hurt your eyes!')

console.log('As you will notice, ang laman ng console ay irrelevant sa content ng webpage. Wala kang magagawa kundi\'y tanggapin ito.')


// INTRODUCTION TO OBJECTS
// AKA Dictionaries
// An object is data that contains key-value pairs.


// Exercise
// 1. Make an empty object.
const chambe = {}


// 2. Make a property for your object that can be accessed with a dot notation. Get the value of this property.
chambe.Breed = 'Shih Tzu'
const myDogBreed =  chambe.Breed
console.log(myDogBreed)


// 3. Make a property for your object that can only be accessed with the bracket notation. Get the value of this property.
chambe['Year of Birth'] = 2015
chambe['Place of Birth'] = 'Marilao, Bulacan'
const myDogBirthPlace = chambe['Place of Birth']
console.log(myDogBirthPlace)


// 4. Set the value of a property with the dot notation.
// The dot notation is always preferred in JavaScript
chambe.Age = 4
const myDogAge = chambe.Age
console.log(myDogAge)


// 5. Set the value of a property with the square bracket notation.
// Dito ako sanay dahil sa Python
chambe['Year of Birth'] = 2019
const myDogBirthYear = chambe['Year of Birth']
console.log(myDogBirthYear)


// 6. Make a method. Call this method.
// creating method format
/*

const anObject = {
  aMethod: function () {
    // Do something in function
  },
}

*/
chambe.Talk = function () {
    return 'Arf!'
}
console.log(chambe.Talk())


// 7. Make a method that takes in an argument. Call this method.
chambe.doAddition = function (num1, num2) {
    return num1 + num2
}
console.log(chambe.doAddition(12, 9))


// Bonus (Gawa-gawa ko lang ito): Logging the object, deleting a property of it, then logging it again.
console.log(chambe) // Property pa rin ng chambe object ang doAddition() method, hindi lang kita dahil madaming ibang property

delete chambe.doAddition // 'Cause Chambe can't really do basic maths

console.log(chambe) // Kita namang nabawasan na hahaha