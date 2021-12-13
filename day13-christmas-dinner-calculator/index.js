const btn = document.getElementById('btn')
const food = document.getElementById('food')
const guestsInput = document.getElementById('guests')
const vegetarianCheckbox = document.getElementById('vegetarian')
const formEl = document.querySelector('form')

let isVegetarian = false
let dinnerSuggestion = ''

// Tasks:
// - Write the JS to decide the perfect Christmas dinner and render it in the result element.
//   Don't forget to check whether the meal should be vegetarian!

// Dinner suggestions (or choose your own!):
// Vegetarian: nut roast
// 4 people or less: turkey
// 5+ people: goose
const checkNumberOfGuests = () => {
  dinnerSuggestion = guestsInput.value < 5 ? 'turkey' : 'goose'
}

const checkIsVegetarian = () => {
  isVegetarian = vegetarianCheckbox.checked ? true : false
}

const makeDinnerSuggestion = () => {
  dinnerSuggestion = isVegetarian ? 'nut roast' : dinnerSuggestion
}

const handleSubmit = (e) => {
  e.preventDefault()
  checkNumberOfGuests()
  checkIsVegetarian()
  makeDinnerSuggestion()
  food.textContent = dinnerSuggestion
}

btn.addEventListener('click', handleSubmit)

// Stretch goals:
// - Add more dietary options.
// - Show recipes when the meal has been selected.
