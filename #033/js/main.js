const arrays = [
    'red',
    'blue',
    'green',
    'black',
    'white',
]

console.log(arrays)
console.log(arrays.length)
console.log(`The third item in the array is ${arrays[2]}`)

// To get items from the end 
const lastItem = arrays[arrays.length - 1]
console.log(`Last item, ${lastItem}.`)

const secondLastItem = arrays[arrays.length - 2]
const thirdLastItem = arrays[arrays.length - 3]

console.log(`Second and third last item respectively, ${secondLastItem} & ${thirdLastItem},`)

// Adding and changing items 
arrays[0] = 'yellow'
console.log(arrays[0])

arrays[7] = 'red'
console.log(arrays)


// Exercise!
console.log('\nExercise outputs:')

// 1. Make an empty array that contains nothing.
const emptyArray = []
console.log(emptyArray)

// 2. Make an array that contains three items.
const adventistColleges = [
    'Northern Luzon Adventist College',
    'Naga View College',
    'Mountain View College',
]

console.log(adventistColleges)

// 3. Given this a list of people (below), do the following:
let people = ['Franklin Roosevelt', 'Thomas Edison', 'Benjamin Franklin']

//  a. Get Franklin Roosevelt from the people array
console.log(people[0])

//  b. Set Thomas Edison to Inventor of the lightbulb
people[1] = 'Inventor of the lightbulb'
console.log(people[1])