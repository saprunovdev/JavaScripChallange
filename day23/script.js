//take num as input and generate that much numbers in the div below
const input = document.querySelector('input')
const numbers = document.querySelector('.numbers')

const generate = () => {
    let num
    numbers.innerHTML = ''
    for(let i = 0; i < input.value; i++){
        num = document.createElement('p')
        num.style.display = "inline-block"
        num.style.padding = "15px"
        num.textContent = i
        i % 2 == 0? num.style.color = 'green' : num.style.color = 'red';
        numbers.appendChild(num)
    }
}

const keyDisplay = document.querySelector('#current-key')

addEventListener('keydown', e => {
    keyDisplay.innerHTML = ''
    keyDisplay.textContent = e.key
})