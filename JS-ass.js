/* Algorithms
step 1: simple app to transfer money from one account 1 to account 2
step 2: Logical step
> declaration of object and properties
> define function to transfer money
> generate loops and conditional 
> define function to prompt user to initiate transfer
> define Function to check account balance,make typing only number valid
step 3: convert to js
step 4: test and refined



*/





let account1 = {
    name: "Account1",
    balance: 1000,
    transactionHistory: []
};

let account2 = {
    name: "Account2",
    balance: 500,
    transactionHistory: []
};


function transferMoney(sender, receiver, amount) {
    if (sender.balance >= amount) {
        sender.balance -= amount;
        receiver.balance += amount;

        sender.transactionHistory.push(-amount); 
        receiver.transactionHistory.push(amount); 

        alert(`Transfer of $${amount} from ${sender.name} to ${receiver.name} successful.`);
    } else {
        alert("Insufficient funds.");
    }
}
 
function promptTransfer() {
    let amount = prompt("Enter amount to transfer: ");

    
    if (!isNaN(amount) && parseFloat(amount) > 0) {
        amount = parseFloat(amount);
        transferMoney(account1, account2, amount);
    } else {
        alert("Invalid amount. Please enter a valid number.");
    }
}


function checkBalance(account) {
    console.log(`Account: ${account.name}`);
    console.log(`Balance: $${account.balance}`);
    console.log(`Transaction History: ${account.transactionHistory.join(", ")}`);
}


promptTransfer(); 
checkBalance(account1); 
