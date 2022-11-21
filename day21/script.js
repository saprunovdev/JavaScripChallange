// // Create an index.html file and put four p elements as above: 
// const texts = document.querySelectorAll('p')
// console.log(texts)

// for(i in texts){
//     texts[i].id = `title-${parseInt(i)+1}`
//     texts[i].textContent = `${parseInt(i) + 1} paragraph`
// }
// // Get the first paragraph by using document.querySelector(tagname) and tag name
// const firstText = document.querySelector('p')
// console.log(firstText)
// // Get each of the the paragraph using document.querySelector('#id') and by their id
// const secondText = document.querySelector('#title-2')
// console.log(secondText)
// // Get all the p as nodeList using document.querySelectorAll(tagname) and by their tag name
// // Loop through the nodeList and get the text content of each paragraph
// for(i in texts){
//     console.log(texts[i].textContent)
// }
// // Set a text content to paragraph the fourth paragraph,Fourth Paragraph
// texts[texts.length - 1].textContent = 'Fourth Paragraph'
// // Set id and class attribute for all the paragraphs using different attribute setting methods

// // Change stye of each paragraph using JavaScript
// //(eg. color, background, border, font-size, font-family)
// // for(i in texts){
// //     texts[i].style.color = 'green'
// // }
// // Select all paragraphs and loop through each elements and give 
// //the first and third paragraph a color of green, 
// //and the second and the fourth paragraph a red color
// texts.forEach((item, i) => {
//     (i % 2 == 0)? item.style.color = 'green' : item.style.color = 'red'
// })


const wrapper = document.querySelector('.wrapper')
wrapper.style.width = '70%'
wrapper.style.margin = 'auto'

const list = document.querySelector('ul')
list.style.listStyle = 'none'


// The year color is changing every 1 second

const header = document.querySelector('h1')
const headerText = header.textContent
//selecting text and year separetely to add tag to text
headerString =/\w+[^\d+]/g
headerYear = /\d+/g
header.innerHTML = `<h1>${headerText.match(headerString).reduce((acc,cur) => acc+ cur)}
                    <span>${headerText.match(headerYear)}</span>
                    </h1>`

changeColor = function changeColor() {
    const maxValue = 0xFFFFFF
    yearColor = document.querySelector('span')
    randomColor = '#' + Math.floor(Math.random() * maxValue).toString(16)
    yearColor.style.color = randomColor
    timeDiv.style.backgroundColor = randomColor
}
setInterval(changeColor, 1000)

// The date and time background color is changing every on seconds
let timeDiv = document.createElement('div')
timeDiv.className = 'time'
wrapper.insertBefore(timeDiv, document.querySelector('ul'))

let timer = setInterval(function(){
    date = new Date()
    timeDiv.innerHTML = date
},1000)




// Completed challenge has background green
// Ongoing challenge has background yellow
// Coming challenges have background red

taskList = document.querySelectorAll('li')

