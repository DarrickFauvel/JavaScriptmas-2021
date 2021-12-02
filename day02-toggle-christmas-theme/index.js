const body = document.getElementById('body')
const greeting = document.getElementById('greeting')
const christmasBtn = document.getElementById('christmas')
const snowBtn = document.getElementById('snow')
const snowLabel = document.getElementById('snow__label-title')
const christmasLabel = document.getElementById('christmas__label-title')

// Task:
//- Add the functionality to switch the theme between 'Christmas' and 'snow'.
christmasBtn.addEventListener('click', () => {
  body.classList.remove('snow')
  body.classList.add('christmas')
  christmasLabel.style.textDecoration = 'underline'
  snowLabel.style.textDecoration = 'none'
})
snowBtn.addEventListener('click', () => {
  body.classList.remove('christmas')
  body.classList.add('snow')
  snowLabel.style.textDecoration = 'underline'
  christmasLabel.style.textDecoration = 'none'
})

christmasLabel.style.textDecoration = 'underline'

// Stretch goals:
// - Add more themes!
// - Allow the user to customise the themes.
// - Turn the radio buttons into a toggle switch.
