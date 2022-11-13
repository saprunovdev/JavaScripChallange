// Declare an empty array;
const emptyArray = new Array()

// Declare an array with more than 5 number of elements
const newArray = [1, 2, 3, 4, 5, 6, 7, 8]

// Find the length of your array
console.log(newArray.length)

// Get the first item, the middle item and the last item of the array
console.log(newArray[0], newArray[newArray.length/2 -1 ], newArray[newArray.length-1])

// Declare an array called mixedDataTypes,
// put different data types in the array and find the length of the array.
// The array size should be greater than 5
const mixedDataTypes = [
    25, 
    'Vadim',
    101234,
    'Saprunov',
    true,
    false,
    [1,2,3,4,5]
]

// Declare an array variable name itCompanies and assign initial values 
//Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon

const itCompanies = [
    'Facebook',
    'Google',
    'Microsoft',
    'Apple',
    'IBM',
    'Oracle',
    'Amazon'
]
// Print the array using console.log()
console.log(itCompanies)

// Print the number of companies in the array
console.log(itCompanies.length)

// Print the first company, middle and last company
console.log(itCompanies[0], itCompanies[Math.ceil(itCompanies.length/2-1)], itCompanies[itCompanies.length-1])
// Print out each company

for (var i = 0; i <= itCompanies.length-1; i ++)
    console.log(itCompanies[i])
// Change each company name to uppercase one by one and print them out
for (var i = 0; i <= itCompanies.length-1; i ++)
    console.log(itCompanies[i].toUpperCase())

// Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
console.log(itCompanies.join(', '))
// Check if a certain company exists in the itCompanies array. 
//If it exist return the company else return a company is not found
// let input = prompt("Type in the company name: ")

// if (itCompanies.includes(input)){
//     console.log(`The company ${input} is in the list under the ${itCompanies.indexOf(input)} index`)
// } else{
//     console.log('Try something else')
// }
// Filter out companies which have more than one 'o' without the filter method

// Sort the array using sort() method
console.log(itCompanies.sort())
// Reverse the array using reverse() method
console.log(itCompanies.reverse())
// Slice out the first 3 companies from the array
// console.log(itCompanies.slice(0,3))
// Slice out the last 3 companies from the array
let length = itCompanies.length
console.log(itCompanies.slice(length-3, length))
// Slice out the middle IT company or companies from the array
console.log(itCompanies[Math.ceil(length/2)-1])
// Remove the first IT company from the array
console.log(itCompanies.splice(0,1))
// Remove the middle IT company or companies from the array
console.log("remove")
console.log(itCompanies.splice(Math.floor(length/2)-1, 1))
// Remove the last IT company from the array
console.log(itCompanies.pop())
// Remove all IT companies
console.log(itCompanies.splice())

console.log(countries)
console.log(webTechs)


//First remove all the punctuations and change the string to array 
//and count the number of words in the array

let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
let stripped = text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")

let stripped_array = stripped.split(' ')
console.log(stripped_array)
let words = stripped_array.length
console.log(words)

//In the following shopping cart add, remove, edit items
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

// add 'Meat' in the beginning of your shopping cart if it has not been already added
if (shoppingCart.includes('Meat')){
    console.log('Meat is already in shopping list')
} else {
    shoppingCart.unshift('Meat')
    console.log(shoppingCart)
}

// add Sugar at the end of you shopping cart if it has not been already added
if (shoppingCart.includes('Sugar')){
    console.log('Sugar is already there')
} else {
    shoppingCart.push('Sugar')
    console.log(shoppingCart)
}

// remove 'Honey' if you are allergic to honey
const isAlergicToHoney = true

if (isAlergicToHoney){
    shoppingCart.splice(shoppingCart.indexOf('Honey'), 1)
    console.log(shoppingCart)
} else {
    console.log('Everything is fine')
}
// modify Tea to 'Green Tea'
shoppingCart.splice(shoppingCart.indexOf('Tea'), 1, 'Grean Tea')
console.log(shoppingCart)

//In countries array check if 'Ethiopia' exists in the array 
//if it exists print 'ETHIOPIA'. 
//If it does not exist add to the countries list.

if (countries.includes('Ethiopia')){
    console.log(countries[countries.indexOf('Ethiopia')].toUpperCase())
} else {
    countries.push('Ethiopia')
    console.log(countries)
}

//Concatenate the following two variables and store it in a fullStack variable.

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']

fullStack = frontEnd.concat(backEnd)
console.log(fullStack)

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

// Sort the array and find the min and max age
console.log(ages.sort()[0])
console.log(ages.sort()[ages.length - 1])
// Find the median age(one middle item or two middle items divided by two)
console.log(ages.sort())

let median = (ages[Math.floor(ages.length/2)] + ages[Math.ceil(ages.length/2)])/2
console.log(median)

// Find the average age(all items divided by number of items)
let avg = 0
for (i in ages){
    avg += ages[i]
}
avg = avg / ages.length
console.log(avg)

// Find the range of the ages(max minus min)
let range = ages.sort()[ages.length - 1] - ages.sort()[0]
console.log(range)

// Compare the value of (min - average) and (max - average), use abs() method
console.log(Math.abs(ages.sort()[0] - avg))
console.log(Math.abs(ages.sort()[ages.length - 1] - avg))


// Slice the first ten countries from the countries array

// let firstCountries = countries.splice(0,10)
// console.log(firstCountries)


//Find the middle country(ies) in the countries array
if (countries.length % 2 == 0){
    //if lenght of the array is even we pring two countries in the middle
    console.log(countries[Math.floor(countries.length/2) - 1], countries[Math.ceil(countries.length/2)])
} else {
    console.log(countries[Math.floor(countries.length/2)])
}

//Divide the countries array into two equal arrays if it is even. 

//If countries array is not even , one more country for the first half.