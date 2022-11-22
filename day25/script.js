//Visualize the ten most populated countries 
//and the ten most spoken languages in the world using DOM(HTML, CSS, JS)

const countriesCount = document.querySelector('span') 
countriesCount.textContent = countries.length //country number


const title = document.querySelector('.title') //current statistic title
const printData = document.querySelector('.data') //statistic printing div

const population = () => {
    //set title and clear div data
    title.textContent = '10 most populated countries'
    printData.innerHTML = ''

    // get 10 most populated countries
    mostPopulated = countries.sort((a, b) => b.population - a.population).slice(0,10)

    const mostPopulatedCountry = mostPopulated[0].population
    let country
    let graph
    for(let i in mostPopulated){
        countryName = mostPopulated[i].name
        countryPopulation = mostPopulated[i].population
        countryPercentage = Math.floor((countryPopulation/mostPopulatedCountry) * 100)

        country = document.createElement('div')
        country.className = 'country'
        

        graph = document.createElement('div')
        graph.textContent = `${countryPercentage}%`
        graph.style.backgroundColor = 'orange'
        graph.style.height = '20px'
        // graph.style.maxWidth = '200px'
        graph.style.width = `${countryPercentage * 3.5}px`
        
        country.textContent = `${countryName}: ${countryPopulation}`


        country.appendChild(graph)
        printData.appendChild(country)
    }
}

const languages = () => {
    title.textContent = '10 most spoken languages'
    printData.innerHTML = ''

    //get all languages from the data
    let languagesOnly = []
    countries.map(e => e.languages.forEach(i => languagesOnly.push(i)))
    //create languages set
    let exclusiveLanguages = new Set(languagesOnly)
    //count the number of time language appears in the array 

    const counts = []

    for (const l of exclusiveLanguages) {
        const filteredLang = languagesOnly.filter((lng) => lng === l)
        counts.push({ lang: l, count: filteredLang.length })
    }
    
    //print first 10 most spoken languages
    mostSpoken = counts.sort((a, b) => b.count - a.count).slice(0,10)
    let country
    let graph
    for(let i in mostSpoken){
        countryName = mostSpoken[i].lang
        langFrequency = mostSpoken[i].count
        countryPercentage = Math.floor((langFrequency/mostSpoken[0].count) * 100)

        country = document.createElement('div')
        country.className = 'country'
        

        graph = document.createElement('div')
        graph.textContent = `${countryPercentage}%`
        graph.style.backgroundColor = 'orange'
        graph.style.height = '20px'
        // graph.style.maxWidth = '200px'
        graph.style.width = `${countryPercentage * 3.5}px`
        
        country.textContent = `${countryName}: ${langFrequency}`


        country.appendChild(graph)
        printData.appendChild(country)
    }
}