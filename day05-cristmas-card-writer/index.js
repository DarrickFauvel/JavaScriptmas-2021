const greetingDisplay = document.getElementById('greeting-display')
const btn = document.getElementById('btn')
const bauble = document.getElementById('bauble')
let prevIndex = null

const greetings = [
  'Santa Claus is coming to town!',
  'We wish you a Merry Christmas!',
  'Happy holidays!',
  'Ho, ho, ho! Merry Christmas!',
  'Jingle all the way!'
]

// Task:
// Write a function to display a random greeting in the card.
const writeGreeting = () => {
  const randomIndex = Math.floor(Math.random() * greetings.length)
  let newIndex = randomIndex
  if (newIndex === prevIndex) {
    newIndex === 0 ? newIndex++ : newIndex--
  }
  const randomGreeting = greetings[newIndex]
  greetingDisplay.innerText = randomGreeting
  prevIndex = newIndex
}

btn.addEventListener('click', writeGreeting)

writeGreeting()

// Stretch goals:
// - Allow the user to input to and from names.
// - Add an input for custom messages.
