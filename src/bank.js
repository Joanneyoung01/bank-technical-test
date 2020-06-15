class Bank {

  constructor() {
    this.bankBalance = 0.00
    this.date = 0
  }

  currencyFormat(number){
    return "£" + number.toFixed(2);
  }

  dateFormat(){
    var currentDate = new Date()
    var day = currentDate.getDate()
    var month = currentDate.getMonth()
    var year = currentDate.getFullYear()
    return day + "/" + month + "/" + year
  }

  deposit(input) {
    this.date = this.dateFormat()
    this.bankBalance += input
    return this.bankBalance
    
  }

}