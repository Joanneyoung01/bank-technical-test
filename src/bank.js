class Bank {

  constructor() {
    this.bankBalance = 0
  }

  deposit(number) {
    this.bankBalance += number
    return this.bankBalance
  }
}