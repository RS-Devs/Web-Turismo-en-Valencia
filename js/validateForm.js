const form = document.getElementById("contact-form");
const { name, surname, email } = form.elements;

function validateName() {
  const value = name.value.trim();
  if (value.length < 3 || value.length > 12) {
    name.classList.add("is-invalid");
  } else {
    name.classList.remove("is-invalid");
  }
}

function validateSurname() {
  const value = surname.value.trim();
  if (value.length < 3 || value.length > 12) {
    surname.classList.add("is-invalid");
  } else {
    surname.classList.remove("is-invalid");
  }
}

function validateEmail() {
  const value = email.value.trim();
  const emailRegex = /@gmail\.com$|@hotmail\.com$/;
  if (!emailRegex.test(value)) {
    email.classList.add("is-invalid");
  } else {
    email.classList.remove("is-invalid");
  }
}

function validateForm(event) {
  event.preventDefault();
  validateName();
  validateSurname();
  validateEmail();
  if (form.checkValidity()) {
    form.submit();
  }
}

form.addEventListener("submit", validateForm);
