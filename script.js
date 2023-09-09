//  error function
// - create ul list with basic password requirements
// - - min length 8
// - - one Upper case
// - - one @!%#% symbol
// - - one number

const form = document.querySelector("form");
const password = document.getElementById("password");

const pattern = {
  minLength: {
    validate: false,
    message: "At least 8 characters",
    link: '',

    test: function (str) {
      const regex = new RegExp(".{8,}");

      regex.test(str) ? (this.validate = true) : (this.validate = false);
    },
  },
  lowerCase: {
    validate: false,
    message: "At least 1 lowercase character [a-z]",
    link: '',

    test: function (str) {
      const regex = new RegExp(".*?[a-z]");

      regex.test(str) ? (this.validate = true) : (this.validate = false);
    },
  },
  upperCase: {
    validate: false,
    message: "At least 1 uppercase character [A-Z]",
    link: '',

    test: function (str) {
      const regex = new RegExp(".*?[A-Z]");

      regex.test(str) ? (this.validate = true) : (this.validate = false);
    },
  },
  number: {
    validate: false,
    message: "At least 1 numeric character [0-9]",
    link: '',

    test: function (str) {
      const regex = new RegExp(".*?[0-9]");

      regex.test(str) ? (this.validate = true) : (this.validate = false);
    },
  },
  specialCharacter: {
    validate: false,
    message: "At least 1 special character [@$!%*?&]",
    link: '',

    test: function (str) {
      const regex = new RegExp(".*?[@$!%*?&]");

      regex.test(str) ? (this.validate = true) : (this.validate = false);
    },
  },
};

let listCreated = false;

function requirementsList() {
  if (!listCreated) {
    const passwordContainer = document.querySelector(".password-container");
    const errorList = document.createElement("ul");

    for (let item in pattern) {
      const errorItem = document.createElement("li");
      pattern[item].link = errorItem;

      pattern[item].validate
      ? (pattern[item].link.classList = "form-success")
      : (pattern[item].link.classList = "form-error");
      
      errorItem.textContent = pattern[item].message;
      errorList.appendChild(errorItem);
    }

    passwordContainer.appendChild(errorList);
    listCreated = true;

    ["click", "focusin"].forEach((e) =>
      window.addEventListener(e, (event) => {
        if (!passwordContainer.contains(event.target)) {
          errorList.remove();
          listCreated = false;
        }
      })
    );
  }
}

password.addEventListener("click", requirementsList);
password.addEventListener("focusin", requirementsList);

password.addEventListener("input", (event) => {
  for (let item in pattern) {
    console.log(event.target.value);
    pattern[item].test(event.target.value);

    pattern[item].validate
      ? (pattern[item].link.classList = "form-success")
      : (pattern[item].link.classList = "form-error");
  }
});

form.addEventListener("submit", (event) => {
  if (!password.validity.patternMismatch && !password.validity.valueMissing) {
    alert("deez nuts");
  } else {
    event.preventDefault();
  }
});
