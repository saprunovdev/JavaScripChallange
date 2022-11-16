// const a = [4, 5, 8, 9]
// const b = [3, 4, 5, 7]
// //const countries = ['Finland', 'Sweden', 'Norway']

// // create an empty set
// emptySet = new Set()

// // Create a set containing 0 to 10 using loop
// // A = new Set()
// // for (let i = 0; i <= 10; i++){
// //     A.add(i)
// // }
// // console.log(A)
// // // Remove an element from a set
// // A.delete(10)
// // console.log(A)
// // // Clear a set
// // A.clear()
// // console.log(A)

// // Create a set of 5 string elements from array
// arr = [
//     'Vadim',
//     'Cho Cho',
//     'Shiwan',
//     'Takho',
//     'Ethiene'
// ]

// names = new Set(arr)
// console.log(names)

// // Create a map of countries and number of characters of a country
// countries = [
//     'Russia',
//     'Korea',
//     'France',
//     'UK',
//     'Spain',
// ]

// //Looping through the array and replacing each element with new array 
// countries = countries.map( e => [e, e.length])

// map = new Map(countries)

// console.log(map)


// // Find a union b

// let A = new Set(a)
// let B = new Set(b)
// c = [...a, ...b] //... is a spread operator which unpacks array values
// let C = new Set(c)

// console.log(C)

// // Find a intersection b
// intersetion = a.filter(e => B.has(e))
// console.log(`Intersection: ${intersetion}`)
// // Find a with b
// intersetion = c.filter(e => !A.has(e) || !B.has(e))
// console.log(`Intersection: ${intersetion}`)

// How many languages are there in the countries object file.
console.log(countries)

//create a for loop which will unpack all the languages and then get rid of duplicates
//by declaring the new Set()
languages = []
for (i in countries){
    lang_list = countries[i].languages
    for (e in lang_list){
        lang = lang_list[e]
    }
    languages.push(lang)
}

langSet = new Set(languages)
console.log(langSet)

//*** Use the countries data to find the 10 most spoken languages:
const counts = []
const count = {}

for (const l of langSet) {
  const filteredLang = languages.filter((lng) => lng === l)
  console.log(filteredLang) // ["English", "English", "English"]
  counts.push({ lang: l, count: filteredLang.length })
}
console.log(counts)

