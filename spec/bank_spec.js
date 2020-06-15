describe("bank", function(){

  var bank = new Bank;

  it("should add to the bank balance", function(){
    expect(bank.deposit(500)).toEqual(500)
  });

});

