// // Create an empty object called dog
// const dog = {

// }

// // Print the the dog object on the console
// // console.log(dog)

// // Add name, legs, color, age and bark properties for the dog object. 
// //The bark property is a method which return woof woof
// dog.name = 'Friend'
// dog.legs = 4
// dog.color = 'White'
// dog.age = 6
// dog.bark = function(){
//     return "Woof Woof"
// }

// // Get name, legs, color, age and bark value from the dog object

// console.log(dog.values)
// // Set new properties the dog object: breed, getDogInfo

// dog.breed = "French buldog"

// dog.getDogInfo = function (){
//     return `this dog is ${this.age} years old. It is ${this.color} and the breed is ${this.breed}`
// }

// console.log(dog.getDogInfo())

const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }

// Find the person who has many skills in the users object.

function findMaxSkills(users) {
    let maxSkills = 0
    let maxSkillsPerson
    //Looping through the users object
    for(const user in users){
        // To access each user info we have to assign user to local var
        
        let person = users[user]
        for (const data in person){
            if (maxSkills < person.skills.length){
                maxSkills = person.skills.length
                maxSkillsPerson = user
            }
        }
    }
    return maxSkillsPerson
}

console.log(findMaxSkills(users))

// Count logged in users, count users having greater than equal to 50 points 
//from the following object.

function loggedInUsers(users){
  let count = 0
  for (let user in users){
    users[user].isLoggedIn ? count ++ : null;
  }
  return count
}

console.log(loggedInUsers(users))

function usersWithPoints (users){
  let count = 0
  for (let user in users){
    users[user].points >= 50 ? count ++ : null;
  }
  return count
}

console.log(usersWithPoints(users))


function MERN(users){
  mernUsers = []
  for (let user in users){
    if (users[user].skills.includes('MongoDB', 'React', 'Express', 'Node'))
    mernUsers.push(user)
  }
  return mernUsers
}

console.log(MERN(users))

users.Vadim = {
  email: 'saprunovdev@gmail.com',
  skills: ['HTML', 'CSS', 'JavaScript', 'Python', 'Django'],
  age: 25,
  isLoggedIn: true,
  points: 100
}

console.log(users)

const copyUsers = Object.assign({},users)
console.log(copyUsers)

const keys = Object.keys(copyUsers)
console.log(keys)

const values = Object.values(copyUsers)
console.log(values)

//Create an object literal called personAccount. 
//It has firstName, lastName, incomes, expenses properties 
//and it has totalIncome, totalExpense, accountInfo,addIncome, 
//addExpense and accountBalance methods. 
//Incomes is a set of incomes and its description and expenses is a set of incomes 
//and its description.

const personAccount = {
  firstName : 'Vadim',
  lastName : 'Saprunov',
  income : [5000, 2000, 1000],
  expenses : [200, 100, 1000],

  totalIncome: function() {
    let sum = 0
    for (let i in this.income){
      sum += this.income[i]
    }
    return sum
  },

  totalExpences: function () {
    let sum = 0
    for (let i in this.expenses){
      sum += this.expenses[i]
    }
    return sum
  },

  accountInfo: function () {
    return `This is ${personAccount.firstName}\'s account and there is ${personAccount.totalIncome()} amount of money.`
  },

  addIncome: function (amount) {
    this.income.push(amount)
  },

  addExpense: function (amount) {
    personAccount.expenses.push(amount)
  }

}

console.log(personAccount.totalIncome())
console.log(personAccount.totalExpences())
console.log(personAccount.accountInfo())

personAccount.addIncome(400)