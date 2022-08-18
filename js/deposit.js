// ! all functions are from utilities.js
document.getElementById("btn-deposit").addEventListener("click", function () {
  //* deposit input field er value nissi
  const newDepositAmount = getInputField("deposit-input");

  //* deposit box er innerText nissi and tate input theke pawa value and deposit box er ager value duita jog kore add kortesi
  const previousDepositAmount = getAmount("deposit-amount");
  const depositTotal = previousDepositAmount + newDepositAmount;
  setTotal("deposit-amount", depositTotal);

  //* balance box er innerText nissi and tate input theke pawa value and balance box er ager value duita jog kore add kortesi
  const previousBalanceAmount = getAmount("balance-amount");
  const balanceTotal = previousBalanceAmount + newDepositAmount;
  setTotal("balance-amount", balanceTotal);
});
