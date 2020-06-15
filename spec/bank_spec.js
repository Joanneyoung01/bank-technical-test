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

    afterEach(() => {
      jasmine.clock().uninstall();
    });
  });
});