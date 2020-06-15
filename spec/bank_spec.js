describe("bank", function(){

  var bank;

  beforeEach(function(){
    bank = new Bank;
    bank.bankBalance = 0;
  })
 
  it("should add to the bank balance", function(){
    expect(bank.deposit(500)).toEqual(500)
  });

  it("should add to the bank balance", function(){
    bank.bankBalance = 0;
    expect(bank.deposit(300)).toEqual(300)
  });

});

