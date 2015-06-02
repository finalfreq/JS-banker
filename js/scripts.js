var account = []

function BankAccount(name, balance) {
  this.name    = name;
  this.balance = Math.floor(balance * 100) / 100;
}

BankAccount.prototype.deposit = function(amount) {
  this.balance += amount;
};

BankAccount.prototype.withdraw = function(amount) {
  if (this.balance < amount) {
    return false;
  } else {
  this.balance -= amount;
  }
};

function resetFields() {
  $("#transactions").find("input[type='number']").val("");
}

$(function(){
  $("form#create-account").submit(function(event) {
    var name = $("input#name").val();
    var initialDeposit = parseFloat($("input#initial-deposit").val());
    var customer = new BankAccount(name, initialDeposit);
    account.push(customer)
    $(".account-create").hide();
    $("#account-info").show();
    $("#account-info h3").text(customer.name + "'s " + "account")
    $(".balance").append(customer.balance)
    event.preventDefault();
  });

  $("form#transactions").submit(function(event) {
    event.preventDefault();
    var customer = account[0];
    var depositAmount = parseFloat($("#deposit-amount").val());
    var withdrawalAmount = parseFloat($("#withdrawal-amount").val());

    if (depositAmount) {
      customer.deposit(depositAmount);
    }

    if (withdrawalAmount) {
      if (customer.withdraw(withdrawalAmount) === false) {
        alert("Cannot withdraw $" + withdrawalAmount + ". Current balance is too low.");
      }
    }
    $(".balance").empty().hide().append("$" + customer.balance.toFixed(2)).fadeIn("slow");
    resetFields();
  });
});
