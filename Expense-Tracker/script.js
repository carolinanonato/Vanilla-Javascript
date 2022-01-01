const balance = document.getElementById('balance')
const money_plus = document.getElementById('money-plus')
const money_minus = document.getElementById('money-minus')
const list = document.getElementById('list')
const form = document.getElementById('form')
const tezt = document.getElementById('text')
const amount = document.getElementById('amount')

const dummyTransactions = [
    {id: 1, text: 'Flower', amount: -20 },
    {id: 2, text: 'Salary', amount: -20 },
    {id: 3, text: 'Book', amount: -20 },
    {id: 4, text: 'Camera', amount: 150 },

]

let transactions = dummyTransactions;

//add transactions to dom lsit


function addTransactionDOM (transaction) {
    const sign = transaction.amount < 0 ? '-' : '+';

    const item = document.createElement('li');

    //add class bases on value

    item.classList.add(transaction.amount < 0? 'minus' : 'plus');

    item.innerHTML = `
    ${transaction.text} <span>${sign}${Math.abs(transaction.amount)}</span>
    <button class="delete-btn">x</button>
    `
    list.appendChild(item);

}

//init app
function init () {
    list.innerHTML = '';

    transactions.forEach(addTransactionDOM); 
}

init();