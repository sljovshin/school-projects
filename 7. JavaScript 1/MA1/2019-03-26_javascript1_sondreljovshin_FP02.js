/* Create an 'if else' statement that tests a variable to see if it is orange.
If it is orange, log to the console that it is orange.
If not, log out that it isn’t orange */

var color = "orange";
if (color === "orange") {
    console.log("The variable is " + color);
}
else {
    console.log("The variable is not " + color);
}


/*Create a switch statement that iterates through
every month of the year displaying how many days in each month.
Please note you do not need to use the JavaScript Date method.
*/
var month = "march";
switch (month) {
  case "january":
    console.log(month + " has 31 days");
    break;

  case "february":
    console.log(month + " has 28 days");
    break;

  case "march":
    console.log(month + " has 31 days");
    break;

  case "april":
    console.log(month + " has 30 days");
    break;

  case "may":
    console.log(month + " has 31 days");
    break;

  case "june":
    console.log(month + " has 30 days");
    break;

  case "july":
    console.log(month + " has 31 days");
    break;

  case "august":
    console.log(month + " has 31 days");
    break;

  case "september":
    console.log(month + " has 30 days");
    break;

  case "october":
    console.log(month + " has 31 days");
    break;

  case "november":
    console.log(month + " has 30 days");
    break;

  case "december":
    console.log(month + " has 31 days");
    break;

  default:
  console.log("thats not a month");

}
/* Create an array of objects with three peoples' names, ages and hobbies. */
function People(name, age, hobby) {
  this.name = name,
  this.age = age,
  this.hobby = hobby
}

var allPeople = [
  new People("john", 19, "Skiing"),
  new People ("Elizabth", 23, "Blogging"),
  new People ("Raymond", 43, "Internation Crime")
];

/* Iterate over the array that you have just created with a for loop and retrieve only the hobbies of each object.
Log this to your console. */
for (var i = 0; i < allPeople.length; i++) {
  console.log(allPeople[i].hobby);
}
/* Create a block of code that logs the iteration number to the console 10 times and stops. */
for (var i = 0; i < 10; i++) {
  console.log(i);
}
/* Create a 'try catch' statement that FAILS. */
try {
  console.log(thisVarDoesNotExist);
  }
catch (error) {
  console.log(error);
  }
finally {
    console.log("try defining it first?");
  }
