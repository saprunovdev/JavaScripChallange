const mass = document.querySelector('#mass')
const planet = document.querySelector('select')
const planteImg = document.querySelector('.planet-image')

const calculate = () => {
    planteImg.innerHTML = ''
    planteImg.textContent = `Your mass is: ${mass.value * planet.value} and ${planet.options[planet.selectedIndex].text} image`
}