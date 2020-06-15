describe("bank", function(){

  var bank;

  beforeEach(function(){
    bank = new Bank;
    bank.bankBalance = 0;
    const fixedDate = new Date(2020, 01, 01);
    jasmine.clock().install();
    jasmine.clock().mockDate(fixedDate);
  })
 
  it("should add to the bank balance", function(){
    expect(bank.deposit(500)).toEqual(500)
  });

  it("should add to the bank balance", function(){
    expect(bank.deposit(300)).toEqual(300)
  });

  it("can deposit with a date", function(){
    Date.now()
    bank.deposit(100)
    expect(bank.dateFormat()).toEqual("1/1/2020")
  });

  afterEach(() => {
    jasmine.clock().uninstall();
  });

});