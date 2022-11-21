const body = document.querySelector('body')

let text
for(i=1; i <= 100; i++){
    text = document.createElement('p')
    text.className = 'numbers'
    text.textContent = i
    body.appendChild(text)
    if(i % 5 === 0){
        document.write("<br>")
    }
    if(i % 2 == 0){
        text.style.backgroundColor = '#7ddc7d'
    }else{
        text.style.backgroundColor = 'pink'
    }
}