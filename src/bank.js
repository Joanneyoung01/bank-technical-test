class Bank {

  constructor() {
    this.bankBalance = 0.00
    this.date = 0
    this.statement = [["date", "credit", "debit", "balance"]]
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
    this.statement = [["date", "credit", "debit", "balance"]]
  }

  deposit(input) {
    this.date = this.dateFormat()
    this.bankBalance += input

    const newLine = [this.date, input.toFixed(2), 0, this.bankBalance.toFixed(2)]
    this.statement.push(newLine)
    return this.bankBalance
  }

  withdraw(input) {
    this.date = this.dateFormat()
    this.bankBalance -= input
    return this.bankBalance
  }

  printStatement(){
    var itemized = ""
    this.statement.forEach(function(item){
      itemized += item + "\n"
    })

    return itemized
  }

}