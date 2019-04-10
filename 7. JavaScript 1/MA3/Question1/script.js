//Use RegEx to validate form
var firstName = document.getElementById('firstName');
var lastName = document.getElementById('lastName');
var tlfNumber = document.getElementById('tlfNumber');
var eMail = document.getElementById('eMail');

function validateForm(){
    const namepattern = /^[a-zA-ZWæøå]+$/;
    const numpattern = /^\d{8,8}$/; //takes norwegian number without contrycode
    const emailpattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    var res1 = namepattern.test(firstName.value);
    var res2 = namepattern.test(lastName.value);
    var res3 = numpattern.test(tlfNumber.value);
    var res4 = emailpattern.test(eMail.value);
    console.log("firstname passed: " + res1);
    console.log("Lastname passed: " + res2);
    console.log("number passed:  " + res3);
    console.log( "email passed: " + res4);
    if(res1 === true && res2 === true && res3 === true && res4 === true)
    {
        console.log("Validations successful!");
        return true;
    }
    console.log("Oops! Validation failed!");
    event.preventDefault();
    if(res1 != true) {firstName.style.backgroundColor = "rgba(255,0,0,0.3)";}
    if(res2 != true) {lastName.style.backgroundColor = "rgba(255,0,0,0.3)";}
    if(res3 != true) {tlfNumber.style.backgroundColor = "rgba(255,0,0,0.3)";}
    if(res4 != true) {eMail.style.backgroundColor = "rgba(255,0,0,0.3)";}
    return false;
}