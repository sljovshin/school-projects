// refer to question 4 before development starts for scope document
var cards = [
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
  
  function byTitle(cards) {
    return cards.name === 'John'
  }
  console.log(cards.filter(byTitle));