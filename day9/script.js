// Functional programming

//forEach
//forEach iterates through an array
//it takes element, index and array itself as a parametr

arr = [1,2,8,9,10,4,5,6,7]

//forEach function takes arrow function as an argument
arr.forEach(e => console.log(e))

//Map takes array as an argument with a calllback function and returns new array

//map iterates through the arr array and returns square numbers as a result
newArr = arr.map(e => e**2)
console.log(newArr)

//Filter returns new array with elements, which matches the callback function condition

// filteredArr = arr.filter(e => e >= 3)
// console.log(filteredArr)

//Reduce iterates through an array and return single value

sumArr = arr.reduce((acc, cur) => acc + cur, 0)
console.log(sumArr)

//Every checks the types of data in array and returns boolean
//Compares each element of the array with the condition we provide
isNumbersArray = arr.every(e => typeof e  === typeof 1)
console.log(isNumbersArray)

//Find returns the first element which satisfies the condition

greater5 = arr.find(e => e > 5)
console.log(greater5)

//findIndex returns the index of the first element which satisfies the condition

greater6 = arr.findIndex(e => e > 6)
console.log(greater6)

//some checks if some of the elements are matchin the callback function condition

someArr = arr.some(e => e >= 10)
console.log(someArr)

//sort method is sorting elements in the array by descending or accending order.
//sort uses elements as a string to compare to each other
//hence, to sort numbers array we have to provide a callback function to compare elements.
sortedArr = arr.sort((a, b) => a-b)
console.log(sortedArr)


//Level 1

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
// All of this functions are iterating through the givean array
// forEach takes a callback function but doesn't return new array.
// map is simillar to forEach, but it generates new array
// filter takes a callback function as a condition and generates new array
// with elements, which corresponds to that condition
// reduce loops through the given array and returns one value as a response.

// Define a callback function before you use it in forEach, map, filter or reduce.
const callback = e => console.log(e)

// Use forEach to console.log each country in the countries array.
countries.forEach(callback)

// Use forEach to console.log each name in the names array.
names.forEach(callback)

// Use forEach to console.log each number in the numbers array.
numbers.forEach(callback)

// Use map to create a new array by changing each country to uppercase in the countries array.
uppercaseCountries = countries.map(e => e.toUpperCase())
console.log(uppercaseCountries)

// Use map to create an array of countries length from countries array.
lengthCountries = countries.map(e => e.length)
console.log(lengthCountries)

// Use map to create a new array by changing each number to square in the numbers array
squareNumbers = numbers.map(e => e ** 2)
console.log(squareNumbers)

// Use map to change to each name to uppercase in the names array
uppercaseNames = names.map(e => e.toUpperCase())
console.log(uppercaseNames)

// Use map to map the products array to its corresponding prices.
productsAndPrices = products.map(e => `${e.product}: ${e.price}`)
console.log(productsAndPrices)

// Use filter to filter out countries containing land.
landCountries = countries.filter(e => e.toLowerCase().includes('land'))
console.log(landCountries)

// Use filter to filter out countries having six character.
sixCharsCountries = countries.filter(e => e.length == 6)
console.log(sixCharsCountries)

// Use filter to filter out countries containing six letters and more in the country array.
sixAndMoreCharsCountries = countries.filter(e => e.length >= 6)
console.log(sixAndMoreCharsCountries)

// Use filter to filter out country start with 'E';
startsWithE = countries.filter(e => e.toLowerCase().startsWith('f'))
console.log(startsWithE)

// Use filter to filter out only prices with values.
pricesWithValues = products.filter(e => (e.price >=1)? `${e.product}: ${e.price}` : null)
console.log(pricesWithValues)

// Declare a function called getStringLists which takes an array as a parameter 
//and then returns an array only with string items.
function getStringLists(arr){
  return arr.map(e => e.toString())
}
numToStr = getStringLists(numbers)
console.log(numToStr)

// Use reduce to sum all the numbers in the numbers array.
sum = numbers.reduce((acc, num) => acc + num)
console.log(sum)

// Use reduce to concatenate all the countries and to produce this sentence:
// Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries
reduceCountries = countries.reduce((acc, country) => `${acc}, ${country}`)
console.log(`Estonia, ${reduceCountries} are north European countries`)

// Explain the difference between some and every
// Some checks if only some of the items in the array mathes the condition
// every checks if every item in array is matching the condition

// Use some to check if some names' length greater than seven in names array
namesGreater7 = names.some(e => e.length >=7)
console.log(namesGreater7)

// Use every to check if all the countries contain the word land
countriesWithLand = countries.every(e => e.toLowerCase().includes('land'))
console.log(countriesWithLand)
// Explain the difference between find and findIndex.
// find returns the first element which matches the condition
// and findIndex returns the index of that element

// Use find to find the first country containing only six letters in the countries array
countrySixChar = countries.find(e => e.length == 6)
console.log(countrySixChar)

// Use findIndex to find the position of the first country containing 
//only six letters in the countries array
countrySixChar = countries.findIndex(e => e.length == 6)
console.log(countrySixChar)


// Use findIndex to find the position of Norway 
//if it doesn't exist in the array you will get -1.
findNorway = countries.findIndex(e => e.toLowerCase().includes('norway'))
console.log(findNorway)

// Use findIndex to find the position of Russia 
//if it doesn't exist in the array you will get -1.

findRussia = countries.findIndex(e => e.toLowerCase().includes('russia'))
console.log(findRussia)

// Find the total price of products by chaining two or more array iterators
//(eg. arr.map(callback).filter(callback).reduce(callback))
priceOfProducts = products.map(e => parseInt(e.price))
filteredPriceOfProducts = priceOfProducts.filter(e => e)
sumOfProductPrices = filteredPriceOfProducts.reduce((acc, num) => acc + num)
console.log(sumOfProductPrices)

// Find the sum of price of products using only reduce reduce(callback))


// Declare a function called categorizeCountries which returns an array of countries 
// which have some common pattern(you find the countries array in this repository 
// as countries.js(eg 'land', 'ia', 'island','stan')).
temp = countries1.filter(e => 
  e.name.toLowerCase().includes('land') || 
  e.name.toLowerCase().includes('ia') ||
  e.name.toLowerCase().includes('island') ||
  e.name.toLowerCase().includes('stan')
  )
console.log(temp)

console.log(`Length of the array: ${countries1.length}`)

// Create a function which return an array of objects, which is the letter and the number
// of times the letter use to start with a name of a country.


// Declare a getFirstTenCountries function and return an array of ten countries. 
// Use different functional programming to work on the countries.js array


// Declare a getLastTenCountries function which which returns the last ten countries 
// in the countries array.

// Find out which letter is used many times as initial for a country name from the 
// countries array (eg. Finland, Fiji, France etc)