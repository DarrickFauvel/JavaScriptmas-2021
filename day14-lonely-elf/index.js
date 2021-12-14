const elf = document.getElementById('elf')
const btn = document.getElementById('btn')
const elfHangoutZone = document.querySelector('.elf-hangout-zone')

let elfCount = 1

const duplicateElf = () => {
  // Task:
  // - Write a function to duplicate the elf when the button is clicked.
  // - See index.css for optional styling challenges.
  if (elfCount <= 100) {
    elf.innerHTML += /*html*/ `<div class='elf'>🧝</div>`
    elfCount++
  } else {
    return
  }
}

btn.addEventListener('click', duplicateElf)

// Stretch goals:
// - Write a function to give the elves some tools, or a cup of tea!
// - Limit the total number of elves to 100.
