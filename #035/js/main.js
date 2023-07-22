// forEach loop
// array.forEach((currentValue, index, array) => {
//     Your loop here
//   })

// Most of the time, ito lang ang kailangan
// array.forEach(currentValue => {
//     Your statement here
//   })

const fruitBasket = ['banana', 'pear', 'guava']

fruitBasket.forEach(function (fruit) {
    console.log(fruit)
})

fruitBasket.forEach(fruit => console.log(fruit))

// Exercise!
// Practice using forEach through an array of people (given below). Do the following:
console.log('\nExercise outputs:')
const people = [
    { firstName: 'Benjamin', lastName: 'Franklin', yearOfDeath: 1790 },
    { firstName: 'Thomas', lastName: 'Edison', yearOfDeath: 1931 },
    { firstName: 'Franklin', lastName: 'Roosevelt', yearOfDeath: 1945 },
    { firstName: 'Napolean', lastName: 'Bonaparte', yearOfDeath: 1821 },
    { firstName: 'Abraham', lastName: 'Lincoln', yearOfDeath: 1865 },
    { firstName: 'Mother', lastName: 'Theresa', yearOfDeath: 1962 },
    { firstName: 'Mahatma', lastName: 'Gandhi', yearOfDeath: 1948 },
    { firstName: 'Winston', lastName: 'Churchill', yearOfDeath: 1965 },
    { firstName: 'Charles', lastName: 'Darwin', yearOfDeath: 1882 },
    { firstName: 'Albert', lastName: 'Einstein', yearOfDeath: 1955 },
    { firstName: 'Pablo', lastName: 'Picasso', yearOfDeath: 1973 },
    { firstName: 'Ludwig', lastName: 'Beethoven', yearOfDeath: 1827 },
    { firstName: 'Walt', lastName: 'Disney', yearOfDeath: 1966 },
    { firstName: 'Henry', lastName: 'Ford', yearOfDeath: 1947 },
    { firstName: 'Steve', lastName: 'Jobs', yearOfDeath: 2012 },
  ]

// 1. console.log the first name of each person in the array.
console.log('1.')
people.forEach(person => console.log(person['firstName']))

// 2. Make a second array that contains only the first name of each person.
console.log('2.')
const firstNames = []
people.forEach(person => firstNames.push(person['firstName']))

console.log(firstNames)

// 3. Make a third array that contains people that have died after 1950.
console.log('3.')
const deadPeople = []
people.forEach(function (person) {
    if (person['yearOfDeath'] > 1950) {
        deadPeople.push(person)
    }
})

console.log(deadPeople)

// 4. Find index of Charles Darwin in the array.
console.log('4.')

people.forEach(function (person) {
    if (person.firstName === 'Charles' && person.lastName === 'Darwin') {
        console.log(people.indexOf(person))
    }
})