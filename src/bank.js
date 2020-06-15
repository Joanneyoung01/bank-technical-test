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
    var formattedLine = ""
    this.statement.forEach(function(lines){

      var date = (lines[0])
      var credit = (lines[1])
      var debit = (lines[2])
      var balance = (lines[3])

      if (credit === 0) {
        credit = ""
      } 
      
      if (debit === 0) { 
        debit = ""
      } 

      formattedLine = date + " || " + credit + " || " + debit + " || " + balance

      itemized += formattedLine + "\n"
    })

    console.log(itemized)
    return itemized
  }

}