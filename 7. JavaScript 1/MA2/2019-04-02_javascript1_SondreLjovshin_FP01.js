//MODULE ASSIGNMENT 2 - LEVEL 1
//1. Create a function that displays prototypal inheritance
function Pc() {
  this.make = "Dell",
  this.model = "Latitude 7640"
}

Pc.prototype.pcId = function() {
  console.log("I am a computer but I inherit my make and model "+ this.make + " " + this.model + " from my parent");
};

var laptop = new Pc();
laptop.pcId();

//2. Create an array of numbers from 1 - 10; slice the 5th number in the array
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var theFifth = numbers.slice(4, 5);
console.log(theFifth);

//3. Delete the last number in the array that you created above.
numbers.pop();
console.log(numbers);

//4. Given the following paragraph, create a JavaScript function that changes all mentions of strawberry to banana and strawberries to bananas: 
var str = 'Strawberries are a popular part of spring and summer diets throughout America. Mouths water from coast to coast each spring, when small white blossoms start to appear on strawberry bushes. They announce the impending arrival of the ruby red berries that so many people crave. Ripe strawberries taste sweet and have only a slight hint of tartness. They are also one of the healthiest fruits around. There are countless recipes for the luscious red berry, but many people prefer to eat them fresh and unaccompanied.'
var bananasPlease = function (phrase) {
  phrase = phrase.replace('strawberry', 'banana');
  phrase = phrase.replace('Strawberries', 'bananas');
  return console.log(phrase);
}(str);

//5. Create an array and a button. The array should contain 4 football clubs names. When the button is clicked, remove all elements out of the array that we just created. There after add in 4 names of cars inside that array. Log it to the console.
var toBeChanged = ['Real Madrid', 'Manchester United', 'Vålerenga FK', 'Rosenborg FK'];
function changeList() {
  console.log(toBeChanged);
  toBeChanged = [];
  console.log(toBeChanged);
  toBeChanged.push("Ford", "Mercedes", "Dodge", "BMW")
  console.log(toBeChanged);
}

//6. Create an array of objects with 3 people inside it. Use the filter function to map by a name.
var people = [
  person1 = {
    name: 'John',
    age: 38,
    skill: 'Carpenter'
  },
  person2 = {
    name: 'Jenn',
    age: 29,
    skill: 'Bountyhunter'
  },
  person3 = {
    name: 'Sondre',
    age: 26,
    skill: 'Student'
  }
]

function byName(names) {
  return names.name === 'John'
}
console.log(people.filter(byName));
//7. Create a simple function that logs the date.

//This might be what you ask for
var logDate = function () {
  var date = new Date();
  console.log(date);
}();

//But i would do it like this, to get it metric, uniformed and shortend
var betterLogDate = function () {
  var date = new Date(),
    day = '' + date.getDay(),
    month = '' + date.getMonth(),
    year = date.getFullYear();

  if (day.length < 2) day = '0' + day;
  if (month.length < 2) month = '0' + month;

  var actualDate = day + '-' + month + '-' + year;
  console.log(actualDate)
}();