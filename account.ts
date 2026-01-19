class Account {
    private balance = 0;
    getBalance() {
        return this.balance;
    }
    addMoney(amount: number) {
        this.balance += amount;
    }
    removeMoney(amount: number) {
        this.balance -= amount;
    }
}
interface Transaction {
    doTransaction(account: Account): void;
}
class Deposit implements Transaction {
    amount: number;

    constructor(amount: number) {
        this.amount = amount;
    }
    doTransaction(account: Account) {
        account.addMoney(this.amount);
        console.log("Deposited:", this.amount);
    }
}
class Withdraw implements Transaction {
    amount: number;
    constructor(amount: number) {
        this.amount = amount;
    }
    doTransaction(account: Account) {
        if (account.getBalance() < this.amount) {
            console.log("Not enough balance");
            return;
        }
        account.removeMoney(this.amount);
        console.log("Withdrawn:", this.amount);
    }
}
class Bank {
    account: Account;
    constructor(account: Account) {
        this.account = account;
    }
    makeTransaction(t: Transaction) {
        t.doTransaction(this.account);
        console.log("Balance:", this.account.getBalance());
    }
}
const myAccount = new Account();
const bank = new Bank(myAccount);
bank.makeTransaction(new Deposit(1000));
bank.makeTransaction(new Withdraw(300));
bank.makeTransaction(new Withdraw(800));
