const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

// Explain the difference between forEach, map, filter, and reduce.
// Instead of writing new loops each time we can use this functions to iterate through given array
// And pass functions to this functions to fulfill our needs.

// Define a callback function before you use it in forEach, map, filter or reduce.
e = (e) => console.log(e)
// Use forEach to console.log each country in the countries array.
countries.forEach(e)
// Use forEach to console.log each name in the names array.
names.forEach(e)
// Use forEach to console.log each number in the numbers array.
numbers.forEach(e)
// Use map to create a new array by changing each country to uppercase in the countries array.
const uppercaseCountries = countries.map((country) => country.toUpperCase())
console.log(uppercaseCountries)

// Use map to create an array of countries length from countries array.
const countriesLength = countries.map((country) => country.length)
console.log(countriesLength)
// Use map to create a new array by changing each number to square in the numbers array
const squareNumbers = numbers.map((num) => num**2)
console.log(squareNumbers)

// Use map to change to each name to uppercase in the names array
const uppercaseNames = names.map((name) => name.toUpperCase())
console.log(uppercaseNames)

// Use map to map the products array to its corresponding prices.

// Use filter to filter out countries containing land.
const landCountries = countries.filter((country) => country.toLowerCase().includes('land'))
console.log(landCountries)

// Use filter to filter out countries having six character.
const sixCharCountries = countries.filter(
    (country) => country.length >= 6
)

console.log(sixCharCountries)
// Use filter to filter out countries containing six letters and more in the country array.


// Use filter to filter out country start with 'E';
const countriesStartingWithE = countries.filter(
    (country) => country.toLocaleLowerCase().startsWith('e')
)

console.log(countriesStartingWithE)
// Use filter to filter out only prices with values.
// const onlyValues = products.filter(
//     (product) => product.key
// )

// console.log(onlyValues)

// Declare a function called getStringLists 
//which takes an array as a parameter 
//and then returns an array only with string items.


// Use reduce to sum all the numbers in the numbers array.

const sum = numbers.reduce(
    (num) => num
)
console.log(sum)
// Use reduce to concatenate all the countries and to produce this sentence: 
//Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries


// Explain the difference between some and every
// Use some to check if some names' length greater than seven in names array
// Use every to check if all the countries contain the word land
// Explain the difference between find and findIndex.
// Use find to find the first country containing only six letters in the countries array
// Use findIndex to find the position of the first country containing only six letters in the countries array
// Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.
// Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.