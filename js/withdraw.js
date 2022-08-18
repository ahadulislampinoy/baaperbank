// * inDetails comment deposit file e ase
document.getElementById("btn-withdraw").addEventListener("click", function () {
  const newWithdrawAmount = getInputField("withdraw-input");

  //
  const previousWithdrawAmount = getAmount("withdraw-amount");
  const WithdrawTotal = previousWithdrawAmount + newWithdrawAmount;
  setTotal("withdraw-amount", WithdrawTotal);

  //
  const previousBalanceAmount = getAmount("balance-amount");
  const balanceTotal = previousBalanceAmount - newWithdrawAmount;
  setTotal("balance-amount", balanceTotal);
});
