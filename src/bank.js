class Bank {

  constructor() {
    this.bankBalance = 0.00
  }

  format(number){
    return "£" + number.toFixed(2);
  }

  deposit(input) {
    this.bankBalance += input
    return this.bankBalance
  }
}