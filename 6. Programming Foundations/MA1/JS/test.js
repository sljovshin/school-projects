/*DOM Chache*/
var submitted_userName = document.getElementById("un");
var submitted_passWord = document.getElementById("pw");
var signinbt = document.getElementById("bt");
var countryUL = document.getElementById("country_list");


/* Module assignment 1 part 5 */
var userName = "admin";
var passWord = "password";
bt.addEventListener("click", login);

function login() {
  if (submitted_userName.value != userName) {
    document.getElementById("login_message").innerHTML = 'Your username is wrong';
  }
  else if (submitted_passWord.value != passWord) {
    document.getElementById("login_message").innerHTML = 'Your password is wrong';
  }
  else {
    document.getElementById("login_message").innerHTML = `Welcome ${userName}, enjoy your stay`;
  }
}

/* Module assignment 1 part 6 */
var countries = ["Norway","Sweden", "Denmark", "Finland", "Germany"];

/* Module assignment 1 part 7 */
displayArray();

function displayArray() {
  for (var i = 0; i < countries.length; i++) {
      countryUL.innerHTML = countryUL.innerHTML + `<li>${countries[i]}</li>`;
  }
}
