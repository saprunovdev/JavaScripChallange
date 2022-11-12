// Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
let firstName = "Vadim"
let lastName = "Saprunov"
let country = "Russia"
let city = "Vladivostok"
let isMarried = false

let now = new Date()

let year = now.getFullYear()
console.log(year)
// Check if type of '10' is equal to 10
console.log('10' === 10)
// Check if parseInt('9.8') is equal to 10
console.log(parseInt('9,8') == 10)

console.log(4 !== 4)
console.log(4 != '4')

//Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).

let base = prompt('Enter the triangle base: ')
let height = prompt('Enter the triangle height: ')
console.log(0.5 * base * height)