//Regular expression

//Excersise

//Calculate the total annual income of the person from the following text. 
//‘He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.’

// const text = 'He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.'
// const pattern = /\d+/g
// let amount = text.match(pattern)
// amount = amount.map(e => parseInt(e))
// console.log(amount)
// let total = (amount[0] + amount[2])*12 + amount[1]
// console.log(`Annual income: ${total}`)

const text = 
`The position of some particles on the horizontal x-axis -12, -4, -3 and -1 
in the negative direction, 0 at origin, 4 and 8 in the positive direction.`
//Extract these numbers and find the distance between the two furthest particles.

const pattern = /[-]?\d+/g

let match = text.match(pattern)
match = match.map(e => parseInt(e))
match = match.sort((a,b) => b-a)

let difference = Math.abs(match[0] - match[match.length - 1])
console.log(`Numbers: ${match}\nDifference: ${difference}`)


// Write a pattern which identify if a string is a valid JavaScript variable
// is_valid_variable('first_name') # True
// is_valid_variable('first-name') # False
// is_valid_variable('1first_name') # False
// is_valid_variable('firstname') # True

// not starting with a num and doesn't have -

function is_valid_variable(str){
    regEx = /^[0-9]|[\-]/g
    str.match(regEx) <= 0? bool = true: bool = false

    return bool
}

console.log(`first_name: ${is_valid_variable('first_name')}`)
console.log(`first-name: ${is_valid_variable('first-name')}`)
console.log(`1first_name: ${is_valid_variable('1first_name')}`)
console.log(`firstname: ${is_valid_variable('firstname')}`)

paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`

function tenMostFrequentWords(str){
    let pattern = /\w+/gm
    let words = str.match(pattern)
    let frequency = {}
    //if the word is not in the frequency object
    //add the word and set it to one
    //is the word is already there count how many times it repeats in sentence
    words.forEach(e => (!frequency[e])? frequency[e] = 1: frequency[e] +=1)
    return frequency
}

console.log(tenMostFrequentWords(paragraph))

sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`

function clear(str){
    let pattern =/[!?@#$%%^&*():;.]/gm
    return str.replace(pattern, '')
}

console.log(clear(sentence))