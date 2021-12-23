const sign = document.getElementById('sign')
const textInput = document.getElementById('text-input')

// Task:
// - Write a function to update the Santa Stop Here sign with the user's own text.
const handleChange = (e) => {
  sign.textContent = e.target.value
}

textInput.addEventListener('input', handleChange)

// Stretch goals
// - Add a min and max length to the message.
// - Add interchangeable emojis.
// - Allow the user to customize the colors and other styling elements, too.
