describe("BankAccount", function() {
  it("is initialized with different properties", function() {
    var newAccount = new BankAccount("john denver", 350);
    expect(newAccount.name).to.equal("john denver");
    expect(newAccount.balance).to.equal(350);
  });

  it("deposits money into the account", function() {
    var newAccount = new BankAccount("john denver", 350);
    newAccount.deposit(100);
    expect(newAccount.balance).to.equal(450);
  });

  it("withdraws money out of bank account", function() {
    var newAccount = new BankAccount("john denver", 350);
    newAccount.withdraw(100);
    expect(newAccount.balance).to.equal(250);
  });
  it("returns error if not enough funds available", function() {
    var newAccount = new BankAccount("john denver", 350);
    expect(newAccount.withdraw(400)).to.equal("yo broke")
  });
});
