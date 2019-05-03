//Use RegEx to validate form

let submitContact = document.getElementById('submitContact');
submitContact.addEventListener('click', validateForm);

function validateForm(){
    event.preventDefault();
    let firstName = document.getElementById('firstName');
    let lastName = document.getElementById('lastName');
    let phone = document.getElementById('phone');
    let email = document.getElementById('email');
    if (validator.firstName(firstName) === false) {
      document.getElementById('firstNameError').style.display = "block";
    }
    else {
      document.getElementById('firstNameError').style.display = "none";
    }

    if (validator.lastName(lastName) === false) {
      document.getElementById('lastNameError').style.display = "block";
    }
    else {
      document.getElementById('lastNameError').style.display = "none";
    }

    if (validator.phoneNumber(phone) === false) {
      document.getElementById('phoneError').style.display = "block";
    }
    else {
      document.getElementById('phoneError').style.display = "none";
    }

    if (validator.eMail(email) === false) {
      document.getElementById('emailError').style.display = "block";
    }
    else {
      document.getElementById('emailError').style.display = "none";
    }
}
let validator = {
    namepattern  : /^[a-zA-ZWæøå]+$/,
    numpattern   : /^[0-9]{3}-[0-9]{3}-[0-9]{4}|[0-9]{3}\.[0-9]{3}\.[0-9]{4}|[0-9]{3} [0-9]{3} [0-9]{4}$/, 
    emailpattern : /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z-]{2,64}$/,
    firstName : function (firstname) {
      return firstNameResult = this.namepattern.test(firstname.value);
    },
    lastName : function (lastname) {
      return lastNameResult = this.namepattern.test(lastname.value);
    },
    phoneNumber : function (number) {
      return numberResult = this.numpattern.test(number.value);
    },
    eMail : function (email) {
      return emailResult = this.emailpattern.test(email.value);
    }
  }