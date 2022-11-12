//Get user input using prompt(“Enter your age:”). If user is 18 or older , 
//give feedback:'You are old enough to drive' 
//but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

// let age = prompt('enter your age')

// if (age >= 18){
//     console.log("You are allowed to drive");
// } else {
//     let years_left = 18 - age
//     console.log(`You will be allowed to drive in ${years_left} years`);
// }

//Compare the values of myAge and yourAge using if … else. 
//Based on the comparison and log the result to console stating who is older (me or you). 
//Use prompt(“Enter your age:”) to get the age as input.

// const myAge = 25
// let yourAge = prompt("Enter your age")

// let difference = myAge - yourAge

// if(difference > 0 ){
//     console.log(`I am older than you by ${Math.abs(difference)}`)
// } else{
//     console.log(`You are older than me by ${Math.abs(difference)}`)
// }

//If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways
//using if else

// let a = 4
// let b = 6

// if (a > b){
//     console.log("a is greater than b")
// } else {
//     console.log("a is less than b")
// }

// //ternary operator.

// (a > b) ? console.log("a is greater than b") : console.log("a is less than b")

//Even numbers are divisible by 2 and the remainder is zero. 
//How do you check, if a number is even or not using JavaScript?

//let num = prompt("enter your number: ")

// if (num % 2 == 0){
//     console.log(`${num} is even`)
// } else{
//     console.log(`${num} is odd`)
// }

//num % 2 == 0 ? console.log(`${num} is even`) : console.log(`${num} is odd`)

//Write a code which can give grades to students according to theirs scores:

// let grade = prompt("enter the grade: ")

// switch (true){
//     case grade >= 80 && grade <= 100:
//         console.log("A");
//         break
//     case grade >=60 && grade < 80:
//         console.log("B");
//         break
//     case grade >=40 && grade < 60:
//         console.log("C");
//         break
//     case grade >= 20 && grade <40:
//         console.log("D");
//         break
//     case grade >= 0 && grade <20:
//         console.log("F");
//         break
//     default:
//         console.log("Enter the correct grade")
// }