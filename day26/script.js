//Set num of total countries
const total = document.querySelector('.total').textContent = `Total countries: ${countries.length}`
const current = document.querySelector('.current')
const input = document.querySelector('input')
const result = document.querySelector('.result')

//display all countries
function displayCountries(q){
    for(i in q){
        let country = document.createElement('div')
        let br = document.createElement('div')
    
        country.className = 'item'
        country.textContent = q[i]
    
        br.className = 'break'
    
        result.appendChild(country)
    }
}

//search logic
input.addEventListener('input', e =>{
    result.innerHTML = ''
    let qeurry = countries.filter(i => i.toLowerCase().includes(e.target.value.toLowerCase()))
    current.textContent = `You are searcning for: ${e.target.value} [${qeurry.length}]`
    displayCountries(q= qeurry)
})

onload(displayCountries(q=countries))