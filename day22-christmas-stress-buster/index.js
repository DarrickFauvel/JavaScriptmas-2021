const btn = document.getElementById('btn')
let timer = document.getElementById('timer')
let affirmation = document.getElementById('affirmation')
let timeout

// Task:
// - Write a function to start the countdown timer on the button click and display it in the DOM. Stop the timer when it reaches 0.
const countdown = (elementName, minutes, seconds) => {
  let element, endTime, hours, mins, millisecondsLeft, time

  const twoDigits = (number) => {
    return number <= 9 ? '0' + number : number
  }

  const updateTimer = () => {
    millisecondsLeft = endTime - +new Date()
    if (millisecondsLeft < 1000) {
      element.textContent = 'Time is up!'
    } else {
      time = new Date(millisecondsLeft)
      hours = time.getUTCHours()
      mins = time.getUTCMinutes()
      element.textContent =
        (hours ? hours + ':' + twoDigits(mins) : mins) +
        ':' +
        twoDigits(time.getUTCSeconds())
      setTimeout(updateTimer, time.getUTCMilliseconds() + 500)
    }
  }

  element = document.getElementById(elementName)
  endTime = +new Date() + 1000 * (60 * minutes + seconds) + 500
  updateTimer()
}

btn.addEventListener('click', () => countdown('timer', 15, 0))

// Stretch goals:
// - Show a relaxing image in the background while the timer is running.
// - Play relaxing music.
