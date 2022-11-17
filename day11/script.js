//Destructing and spread

//Destructing is a way to unpack values and store them to the distinct values

//Exercises

// Destructure and assign the elements of constants array 
//to e, pi, gravity, humanBodyTemp, waterBoilingTemp.

const [e, pi, gravity, humanBodyTemp] = constants
console.log(e, humanBodyTemp)

// Destructure and assign the elements of countries array to fin, est, sw, den, nor
const[fin, est, sw, den, nor] = countries
console.log(nor, est)

// Destructure the rectangle object by its properties or keys.
const {width: w, height: h, area: a, perimeter: p} = rectangle
console.log(w, p)

const [...keys] = Object.keys(rectangle)

console.log(keys)
// Iterate through the users array and get all the keys of the object using destructuring
// let userKeys = []
// for( let i of users){
//     let keys = {...Object.keys(i)}
//     console.log(keys)
// }

// Find the persons who have less than two skills

let noobs = users.filter(e => e.skills.length <= 2? e: null)
console.log(noobs)

//Destructure the countries object print 
//name, capital, population and languages of all countries
for (const{name:n, capital:c, population: p, languages: l} of countries){
    console.log(`Name: ${n}\nCapital: ${c}\nPopulation: ${p}\nLanguages${l}\n`)
}



