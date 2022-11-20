const countriesAPI = 'https://restcountries.com/v2/all'
const catsAPI = 'https://api.thecatapi.com/v1/breeds'

// Read the countries API using fetch and print the 
//name of country, capital, languages, population and area.

// fetch(countriesAPI)
//     .then(response => response.json())
//     .then(data => {
//         console.log(data)
//         for (i in data){
//             console.log(data[i].name)
//             console.log(data[i].capital)
//             console.log(data[i].languages)
//             console.log(data[i].population)
//         }
//     })
//     .catch(err => console.log(err))

// Print out all the cat names in to catNames variable.
//Read the cats api and find the average weight of cat in metric unit.

catNames = []
catWeight = []
fetch(catsAPI)
    .then(response => response.json())
    .then(data => {
        for(let i in data){
            catNames.push(data[i].name)
            catWeight.push(data[i].weight.metric)
        }
    })
    .catch(err => console.log(err))

console.log(catNames)
console.log(catWeight)

//Read the countries api and find out the 10 largest countries
// Read the countries api and count total number of languages in the world used as officials.
