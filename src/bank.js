class Bank {

  constructor() {
    this.bankBalance = 0.00
    this.date = 0
  }

  dateFormat(){
    var currentDate = new Date()
    var day = currentDate.getDate()
    var month = currentDate.getMonth()
    var year = currentDate.getFullYear()
    return day + "/" + month + "/" + year
  }

  showBalance(){
    return "£" + this.bankBalance.toFixed(2);
  }

  reset(){
    this.bankBalance = 0;
  }

  deposit(input) {
    this.date = this.dateFormat()
    this.bankBalance += input
    return this.bankBalance
  }

  withdraw(input) {
    this.date = this.dateFormat()
    this.bankBalance -= input
    return this.bankBalance
  }

  printStatement(){
    return "date || credit || debit || balance\n01/01/2020 || 500.00 || || 500.00"
  }

}