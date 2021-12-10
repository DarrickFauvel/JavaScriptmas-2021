const meter = document.getElementById('meter')

// Task:
// Write a function to wire up the festivity loader to reflect how many days are remaining until Christmas!
const loader = () => {
  // Get today's date
  const todaysDate = new Date()

  // Set this year's Christmas date
  const christmasDate = new Date(todaysDate.getFullYear(), 11, 25)

  // One day in total milliseconds
  const oneDay = 1000 * 60 * 60 * 24

  // Calculate days until Christmas
  const daysUntilChristmas = Math.ceil(
    (christmasDate.getTime() - todaysDate.getTime()) / oneDay
  )

  // Display days until Christmas in meter
  if (daysUntilChristmas <= 25) {
    const daysIntoChristmasMonth = 25 - daysUntilChristmas
    meter.value = daysIntoChristmasMonth
  } else {
    meter.value = 0
  }
}

loader()

// Stretch goals:
// - Animate the loader.
// - Change the colors depending on the meter's value.
