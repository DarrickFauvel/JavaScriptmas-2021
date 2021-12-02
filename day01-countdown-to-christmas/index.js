const containerEl = document.querySelector('.container')
const countdownDisplay = document.getElementById('countdown-display')
const divEl = document.createElement('div')
containerEl.appendChild(divEl)

function renderCountdown() {
  // Get today's date
  const todaysDate = new Date()

  // Set this year's Christmas date
  const christmasDate = new Date(todaysDate.getFullYear(), 11, 25)

  // One day in total milliseconds
  const oneDay = 1000 * 60 * 60 * 24

  // Check if today's date is past Christmas day
  if (todaysDate.getMonth() === 11 && todaysDate.getDate() > 25) {
    // increase year by one
    christmasDate.setFullYear(christmasDate.getFullYear() + 1)
  }

  // Calculate days until Christmas
  const daysUntilChristmas = Math.ceil(
    (christmasDate.getTime() - todaysDate.getTime()) / oneDay
  )

  // Display days until Christmas in countdownDisplay.
  countdownDisplay.innerText = daysUntilChristmas

  /*
  Stretch Goal: Display hours, minutes, and seconds
  */

  // Calculate milliseconds between today and Christmas
  const timeDistance = christmasDate.getTime() - todaysDate.getTime()

  // Calculate hours, minutes, and seconds until next day
  const seconds = Math.floor((timeDistance % (1000 * 60)) / 1000)
  const minutes = Math.floor((timeDistance % (1000 * 60 * 60)) / (1000 * 60))
  const hours = Math.floor(
    (timeDistance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  )

  // Display time until next day
  divEl.innerHTML = `
  <p>and...</p>
  <div class='countdown-time'>
    <div>
      <p class='time-title'>${hours}</p>
      <p class='time-label'>hours</p>
    </div>
    <div>
      <p class='time-title'>${minutes}</p>
      <p class='time-label'>minutes</p>
    </div>
    <div>
      <p class='time-title'>${seconds}</p>
      <p class='time-label'>seconds</p>
    </div>
  </div>
  `
}

setInterval(renderCountdown, 1000)

// Stretch goals:
// - Display hours, minutes, seconds.
// - Add a countdown for another festival, your birthday, or Christmas 2022.
