// Create a closure which has one inner function
// function outer(){
//     let num = 0
//     function innner(){
//         num = 5
//         return num
//     }
//     return innner
// }

// inner = outer()

// console.log(inner())

// Create a closure which has three inner functions

// plus, minus and clear

// function scores (){
//     let num = 0
//     function plus(){
//         num ++
//         return num
//     }
//     function minus(){
//         num --
//         return num
//     }
//     function clear(){
//         num = 0
//         return num
//     }
//     return {
//         plus: plus,
//         minus: minus,
//         clear: clear
//     }
// }

// scores = scores()
// console.log(scores.plus())
// console.log(scores.plus())
// console.log(scores.plus())
// console.log(scores.plus())
// console.log(scores.minus())
// console.log(scores.clear())


// Create a personAccount out function. 
//It has firstname, lastname, incomes, expenses inner variables.
//It has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance 
//inner functions. 
//Incomes is a set of incomes and its description and expenses is also a set of expenses 
//and its description.

function personAccount(){
    let firstname = 'Vadim'
    let lastname = 'Saprunov'
    let incomes = []
    let expenses = []
    
    function totalIncome(){
        let sum = incomes.reduce((accumulator, object) => {
            return accumulator + object.amount;
          }, 0);
        return sum
    }

    function totalExpense(){
        let sum = expenses.reduce((accumulator, object) => {
            return accumulator + object.amount;
          }, 0);
        return sum
    }

    function accountInfo(){
        return `${firstname} ${lastname}\'s account\nIncome: ${totalIncome()}\nExpenses: ${totalExpense()}\nBalance: ${accountBalance()}`
    }
    function addIncome(amount, description){
        let item = {'amount': amount,'description': description}
        incomes.push(item)
    }
    function addExpense(amount, description){
        let item = {'amount': amount,'description': description}
        expenses.push(item)
    }
    function accountBalance(){
        return totalIncome() - totalExpense()
    }
    return {
        totalIncome: totalIncome,
        totalExpense: totalExpense,
        accountInfo: accountInfo,
        addIncome: addIncome,
        addExpense: addExpense,
        accountBalance: accountBalance
    }
}

vadim = personAccount()
vadim.addIncome(1000, 'Freelance')
vadim.addExpense(50, 'lunch')
console.log(vadim.accountInfo())