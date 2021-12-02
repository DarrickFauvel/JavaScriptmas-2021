const body = document.getElementById('body')
const greeting = document.getElementById('greeting')
const christmasBtn = document.getElementById('christmas')
const snowBtn = document.getElementById('snow')

// Task:
//- Add the functionality to switch the theme between 'Christmas' and 'snow'.
christmasBtn.addEventListener('click', () => {
  body.className = 'christmas'
})
snowBtn.addEventListener('click', () => {
  body.className = 'snow'
})

// Stretch goals:
// - Add more themes!
// - Allow the user to customise the themes.
// - Turn the radio buttons into a toggle switch.
