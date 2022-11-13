// Iterate 0 to 10 using for loop, do the same using while and do while loop

// for (let i = 0; i < 10; i++){
//     console.log(i + 1)
// }

//i = 0
// while(i < 10){
//     i++
//     console.log(i)
// }

// i = 0 
// do{
//     i++
//     console.log(i)
// } while(i < 10)


// Iterate 10 to 0 using for loop, do the same using while and do while loop
// for (let i = 10; i > 0; i--){
//     console.log(i)
// }

// Write a loop that makes the following pattern using console.log():

// for(let i = 1; i <= 7; i++){
//     console.log(`#`.repeat(i))
// }

// from 0 to 10 multiply

// for(let i = 0; i <= 10; i++){
//     console.log(`${i} * ${i} = ${i * i}`)
// }


// i    i^2   i^3

// console.log('i\ti^2\ti^3')
// for(let i = 0; i <=10; i++){
//     console.log(`${i}\t${i**2}\t${i**3}`)
// }

// Use for loop to iterate from 0 to 100 and print only even numbers
// for(let i = 0; i <= 100; i++){
//     if(i%2 == 0 ){
//         console.log(i)
//     }
// }

// Use for loop to iterate from 0 to 100 and print only odd numbers
// for(let i = 0; i <= 100; i++){
//     if(i%2 != 0 ){
//         console.log(i)
//     }
// }

// Use for loop to iterate from 0 to 100 and print only prime numbers
// for(let i = 0; i <=100; i++){
//     if(i%2 != 0 && i%3 != 0){
//         console.log(i)
//     }
// }

// Use for loop to iterate from 0 to 100 and print the sum of all numbers.
// let sum = 0
// for(let i = 0; i <=100; i++){
//     sum+= i
// }
// console.log(sum)

//Develop a small script which generate array of 5 random numbers
let random = []
for(let i = 0; i < 5; i++){
    random.push(Math.round(Math.random()*10))
}
console.log(random)

