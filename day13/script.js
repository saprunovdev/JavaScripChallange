const names = ['Asabeneh', 'Brook', 'David', 'John']
const countries = [
  ['Finland', 'Helsinki'],
  ['Sweden', 'Stockholm'],
  ['Norway', 'Oslo']
]
const user = {
  name: 'Asabeneh',
  title: 'Programmer',
  country: 'Finland',
  city: 'Helsinki',
  age: 250
}
const users = [
  {
    name: 'Asabeneh',
    title: 'Programmer',
    country: 'Finland',
    city: 'Helsinki',
    age: 250
  },
  {
    name: 'Eyob',
    title: 'Teacher',
    country: 'Sweden',
    city: 'London',
    age: 25
  },
  {
    name: 'Asab',
    title: 'Instructor',
    country: 'Norway',
    city: 'Oslo',
    age: 22
  },
  {
    name: 'Matias',
    title: 'Developer',
    country: 'Denmark',
    city: 'Copenhagen',
    age: 28
  }
]

console.group("Countries")
console.table(countries)
console.groupEnd()

console.group("Users")
console.table(users)
console.groupEnd()

console.assert(10 > 2 * 10 )
console.warn("This is warning message")
console.error("This is error message")

//Check the speed difference among the following loops: while, for, for of, forEach

console.time("While loop")
let i = 0
while(i <= users.length){
    console.log(users[i])
    i++
}
console.timeEnd("While loop")

console.time("For")

for (let i in users){
    console.log(users[i])
}

console.timeEnd("For")

console.time("For of")

for (let i of users){
    console.log(users[i]);
}

console.timeEnd("For of")

console.time("forEach")

users.forEach(e => console.log(e))

console.timeEnd("forEach")