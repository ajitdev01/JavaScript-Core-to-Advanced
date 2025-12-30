class Account {
    #balance = 1000; // private property

    checkBalance() {
        console.log("Balance: ₹" + this.#balance);
    }
}

const acc = new Account();
acc.checkBalance();
// acc.#balance ❌ (Cannot access)
