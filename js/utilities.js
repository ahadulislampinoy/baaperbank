// * inpute value function
function getInputField(inputId) {
  const inputFieldElement = document.getElementById(inputId);
  const inputFieldValue = parseFloat(inputFieldElement.value);
  inputFieldElement.value = "";
  return inputFieldValue;
}

// * deposit/withdraw box total amount function
function getAmount(amountId) {
  const amountElement = document.getElementById(amountId);
  const amountValue = parseFloat(amountElement.innerText);
  return amountValue;
}

// * balance box  amount function
function setTotal(elementId, elementTotal) {
  const linkElement = document.getElementById(elementId);
  linkElement.innerText = elementTotal;
  // ekhne return kori nai karon total balance html e add korar por ar kono kaj nai next e jodi total balance ta abr kono kaje lge tkhn abr return kore kaj korte hbe
}
