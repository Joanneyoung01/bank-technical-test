describe("bank", function(){

  var bank = new Bank;

  describe("when bank balance is empty", function(){

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

    it("throws error if deposit is NaN", function(){
      expect(function(){
        bank.deposit("hello")
      }).toThrowError(TypeError);
    });

    it("throws error if deposit is below 0", function(){
      expect(function(){
        bank.deposit(-50)
      }).toThrow(new Error("Please insert a valid number"));
    });
  
    it("can format bank balance", function(){
      for (let i = 0; i < 3; i++) {
        bank.deposit(100)
      }
      expect(bank.showBalance()).toEqual("£300.00")
    });

    it("can print a statement", function(){
      bank.reset()
      bank.deposit(100)
      expect(bank.printStatement()).toEqual("date || credit || debit || balance\n1/1/2020 || 100.00 ||  || 100.00\n")
    });

    it("cannot dispense cash if bank balance is below requesting amount", function(){
      bank.deposit(80)
      expect(function(){
        bank.withdraw(100)
      }).toThrow(new Error("Sorry you have insufficient funds, please withdraw £80 or less"));
    });

    afterEach(function(){
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

    afterEach(function(){
      jasmine.clock().uninstall();
    });
  });

  describe("when bank account has built up activity", function(){

    it("can print a statement", function(){
      bank.reset()
      jasmine.clock().install();

      const dayOne = new Date(2012, 1, 10); 
      jasmine.clock().mockDate(dayOne);   
      bank.deposit(1000)

      const dayTwo = new Date(2012, 1, 13);
      jasmine.clock().mockDate(dayTwo);
      bank.deposit(2000)

      const dayThree = new Date(2012, 1, 14);
      jasmine.clock().mockDate(dayThree);
      bank.withdraw(500)

      expect(bank.printStatement()).toEqual("date || credit || debit || balance\n14/1/2012 ||  || 500.00 || 2500.00\n13/1/2012 || 2000.00 ||  || 3000.00\n10/1/2012 || 1000.00 ||  || 1000.00\n")
    });

    afterAll(function(){
      jasmine.clock().uninstall();
    });
  });


});