class Bank {

  constructor() {
    this.bankBalance = 0.00
    this.date = 0
    this.statement = []
    this.headings = ["date", "credit", "debit", "balance"]
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
    this.statement = []
  }

  deposit(input) {
    if (Number.isInteger(input) && (input > 0)) {
      this.date = this.dateFormat()
      this.bankBalance += input

      const newLine = [this.date, input.toFixed(2), 0, this.bankBalance.toFixed(2)]
      this.statement.push(newLine)
      return this.bankBalance
    }
      throw new Error("Please insert a valid number");
  }

  withdraw(input) {
    if (input > this.bankBalance) {
      throw new Error("Sorry you have insufficient funds, please withdraw £" + this.bankBalance + " or less");
    }

    this.date = this.dateFormat()
    this.bankBalance -= input
    const newLine = [this.date, 0, input.toFixed(2), this.bankBalance.toFixed(2)]
    this.statement.push(newLine)
    return this.bankBalance
  }

  printStatement(){
    var arr = this.statement.reverse();
    arr.unshift(this.headings)
    return this.generateStatement(arr)
  }

  generateStatement(arr){
    var itemized = ""
    arr.forEach(function(lines){
      var formattedLine = ""

      var date = (lines[0])
      var credit = lines[1] === 0 ? "" : lines[1]
      var debit = lines[2] === 0 ? "" : lines[2]
      var balance = (lines[3])
      
      formattedLine = date + " || " + credit + " || " + debit + " || " + balance
      itemized += formattedLine + "\n"
    })
    return itemized 
  }

}

