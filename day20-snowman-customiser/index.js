const inputs = document.querySelectorAll('.controls input')

// Task:
// Write a function to update the snowman colors according to the colors selected from the pickers.
const handleChange = (e) => {
  const bodyPartName = e.target.dataset.partName
  const selectedColorValue = e.target.value
  const bodyPartElements = document.querySelectorAll(`.${bodyPartName}`)
  bodyPartElements.forEach((part) => {
    if (bodyPartName === 'nose') {
      part.style.borderColor = `transparent transparent transparent ${selectedColorValue}`
    } else {
      part.style.backgroundColor = selectedColorValue
    }
  })
}

inputs.forEach((input) => input.addEventListener('change', handleChange))

// Stretch goals:
// - Add other items eg scarf, arms, etc.
// - Add different options for nose shape, or hats.
// - Check for contrast between pupils and eye color.
