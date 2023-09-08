//  error function
// - create ul list with basic password requirements
// - - min length 8
// - - one Upper case
// - - one @!%#% symbol
// - - one number

const form = document.querySelector("form");
const password = document.getElementById("password");

const passwordContainer = document.querySelector(".password-container");
const errorList = document.createElement("ul");
const errorItem = document.createElement("li");

errorList.appendChild(errorItem);
passwordContainer.appendChild(errorList);

password.addEventListener("input", (event) => {
  if (password.validity.valid) {
    errorItem.classList = "form-success";
  } else {
    showError();
  }
});

form.addEventListener("submit", (event) => {
  if (!password.validity.valid) {
    showError();
  } else {
    event.preventDefault();
  }
});

function showError() {
  if (password.validity.tooShort) {
    errorItem.classList = 'form-error'
    errorItem.textContent = ` Password should be at least ${password.minLength} characters`;
  }
}
