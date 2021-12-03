const greeting = document.getElementById('greeting')
const btn = document.getElementById('btn')

// Task:
// Write a function to fix the UI problems with this Christmas message (make it Christmassy!)
const fix = () => {
  greeting.parentElement.style.fontFamily = `'Mountains of Christmas', cursive`
  greeting.innerText = '🎅 Merry JavaScriptmas! 🤶'
}

// Task:
// Run the function when the Fix button is clicked.
btn.addEventListener('click', fix)

// Stretch goal task:
// Change the message and theme to a New Year’s one automatically on December 31st.
const isItNewYearsDay = () => {
  const date = new Date()
  // const date = new Date(`January, 1 2022 00:00:00`) // test new year date
  const todayDay = date.getDate()
  const todayMonth = date.getMonth()
  if (todayDay === 1 && todayMonth === 0) {
    greeting.parentElement.style.fontFamily = `'Gwendolyn', cursive`
    greeting.innerText = '🎉 Happy New Year! 🥳'
  }
}

isItNewYearsDay()

// Stretch goals:
// - Add an extra theme, and the option to switch between them.
