var account = []

function BankAccount(name, balance) {
  this.name            = name;
  this.balance = balance;
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
    var initialDeposit = parseInt($("input#initial-deposit").val());
    var customer = new BankAccount(name, initialDeposit);
    account.push(customer)
    $(".account-create").hide();
    $("#account-info").show();
    $("#account-info h1").text(customer.name + "'s " + "account")
    $(".balance").prepend(customer.balance)
    event.preventDefault();
  });

  $("form#transactions").submit(function(event) {
    event.preventDefault();
    var customer = account[0];
    var depositAmount = parseInt($("#deposit-amount").val());
    var withdrawalAmount = parseInt($("#withdrawal-amount").val());

    if (depositAmount) {
      customer.deposit(depositAmount);
    }

    if (withdrawalAmount) {
      if (customer.withdraw(withdrawalAmount) === false) {
        alert("cannot withdraw " + withdrawalAmount + "current balance is to low");
      }
    }
    $(".balance").empty().hide().prepend(customer.balance).fadeIn("slow");
    resetFields();
  });
});
