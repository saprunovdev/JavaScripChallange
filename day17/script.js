// Store you first name, last name, age, country, city in your browser localStorage.
let me = JSON.stringify({
    firstName: 'Vadim',
    lastName: 'Saprunov',
    age: 25,
    country: 'Korea',
    city: 'Busan'
})

localStorage.setItem('me', me)

// Create an object called personAccount. 
//It has firstname, lastname, incomes, expenses properties 
//and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense 
//and accountBalance methods. 
//Incomes is a set of incomes and its description 
//and expenses is also a set of expenses and its description.
