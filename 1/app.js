

// const emailInput = document.getElementById('email-input');
// const emailError = document.getElementById('email-error');

// function validateEmail() {
//   const email = emailInput.value;
//   const pattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

//   if (pattern.test(email)) {
//     emailInput.style.borderColor = "initial";
//     emailError.innerHTML = "";
//     return true;
//   } else {
//     emailInput.style.borderColor = "red";
//     emailError.innerHTML = "Пожалуйста, введите корректный email";
//     return false;
//   }
// }

// emailInput.addEventListener('input', validateEmail);


const registerForm = document.getElementById('register-form');
registerForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  console.log(`Username: ${username}, Email: ${email}, Password: ${password}`);
  // Здесь можно отправить данные формы на сервер для обработки
});















