document.getElementById("btn-submit").addEventListener("click", function () {
  // get email value
  const emailInput = document.getElementById("email");
  const email = emailInput.value;

  // get password value
  const passwordInput = document.getElementById("password");
  const password = passwordInput.value;

  // checking login email and password
  // ! Danger : do not verify email, password in client side - will learn later what is the valid way
  if (email === "email@gmail.com" && password === "password") {
    // bank.html file e jabe
    window.location.href = "bank.html";
  } else {
    alert("Enter valid info");
  }
});
