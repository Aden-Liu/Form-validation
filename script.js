const nameError = document.getElementById("name-error");
const phoneError = document.getElementById("phone-error");
const emailError = document.getElementById("email-error");
const messageError = document.getElementById("message-error");
const submitError = document.getElementById("submit-error");

function validateName() {
  let name = document.getElementById("contact-name").value;

  if (name.length == 0) {
    nameError.innerHTML = "Name is required";
    return false;
  }
  if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    //checks if first character is from A-z, then checks for a space, then checks if the next character is from A-z
    nameError.innerHTML = "Enter full name";
    return false;
  }
  nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}

function validatePhone() {
  let phone = document.getElementById("contact-phone").value;

  if (phone.length == 0) {
    phoneError.innerHTML = "Phone No. is required";
    return false;
  }
  if (phone.length !== 10) {
    phoneError.innerHTML = "Invalid Phone No.";
    return false;
  }
  //checks if the characters are from 0-9 and if there are 10 of them.
  if (!phone.match(/^[0-9]{10}$/)) {
    phoneError.innerHTML = "Invalid Phone No.";
    return false;
  }
  phoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}

function validateEmail() {
  let email = document.getElementById("contact-email").value;

  if (email.length == 0) {
    emailError.innerHTML = "Email is required";
    return false;
  }
  //Checks for an alphabet, may container a . or _ or -, a number from 0-9, an @ symbol, another alphabet, a dot followed by 2-4 characters
  if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    emailError.innerHTML = "Invalid Email";
    return false;
  }
  emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}

function validateMessage() {
  let message = document.getElementById("contact-message").value;
  let required = 30;
  let remaining = required - message.length;

  if (remaining > 0) {
    messageError.innerHTML = `${remaining} more characters required`;
    return false;
  }
  messageError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}

function validateForm() {
  if (!validateName() || !validatePhone() || !validateEmail() || !validateMessage()) {
    submitError.style.display = "block";
    submitError.innerHTML = "Please fix error(s)";
    setTimeout(function(){submitError.style.display = "none"}, 3000);
    return false;
  }
}
