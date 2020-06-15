describe("bank", function(){

  var bank = new Bank;

  describe("bank balance is empty", function(){

    beforeEach(function(){
      bank.reset()
      const fixedDate = new Date(2020, 01, 01);
      jasmine.clock().install();
      jasmine.clock().mockDate(fixedDate);
    })

    it("can add to the bank balance", function(){
      expect(bank.deposit(500)).toEqual(500)
    });
  
    it("can deposit with a date", function(){
      bank.deposit(100)
      expect(bank.dateFormat()).toEqual("1/1/2020")
    });
  
    it("can format bank balance", function(){
      bank.deposit(100)
      bank.deposit(100)
      bank.deposit(100)
      expect(bank.showBalance()).toEqual("£300.00")
    });

    it("can print a statement", function(){
      bank.deposit(100)
      expect(bank.printStatement()).toEqual("date || credit || debit || balance\n01/01/2020 || 500.00 || || 500.00")
    });

    afterEach(() => {
      jasmine.clock().uninstall();
    });
  });
 
  describe("when bank balance is topped up", function(){
    
      beforeEach(function(){
        bank.reset()
        const fixedDate = new Date(2020, 02, 02);
        jasmine.clock().install();
        jasmine.clock().mockDate(fixedDate);
        bank.deposit(300)
      });

    it("can withdraw from bank balance", function(){
      expect(bank.withdraw(200)).toEqual(100)
    });

    it("can withdraw with a date", function(){
      expect(bank.dateFormat()).toEqual("2/2/2020")
    });

    afterEach(() => {
      jasmine.clock().uninstall();
    });
  });

  // describe("after built up history of activity", function(){

  //   beforeEach(function(){
  //     bank.reset()
  //     jasmine.clock().install();

  //     const dayOne = new Date(2012, 14, 01);
  //     jasmine.clock().mockDate(dayOne);
  //     bank.deposit(300)

  //     const dayTwo = new Date(2020, 13, 01);
  //     jasmine.clock().mockDate(dayTwo);
  //     bank.deposit(300)

  //     bank.reset()
  //     const dayThree = new Date(2012, 14, 01);
  //     jasmine.clock().mockDate(dayThree);
  //     bank.deposit(300)
  //   });
    
  //   it("can print a statement", function(){
  //     expect(bank.printStatement()).toEqual("date || credit || debit || balance\n14/01/2012 || || 500.00 || 2500.00\n13/01/2012 || 2000.00 || || 3000.00\n10/01/2012 || 1000.00 || || 1000.00")
  //   });

  //   afterEach(() => {
  //     jasmine.clock().uninstall();
  //   });
  // });


});