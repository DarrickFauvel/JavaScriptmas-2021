const greeting = document.getElementById('greeting')
const christmassifierBtn = document.getElementById('christmassifierBtn')
const container = document.querySelector('.container')

const renderAudioElement = () => {
  const divEl = document.createElement('div')
  const htmlContent = /*html*/ `
  <audio id="myAudio" autoplay controls src="music.mp3">
  Your browser does not support the <code>audio</code> element.
  </audio>`
  divEl.innerHTML = htmlContent
  container.appendChild(divEl)
}

const christmassifyName = () => {
  // Task:
  // - Add christmassify class to greeting.
  // - Check whether christmassifierBtn has christmassify on it. If so, change text to "De-christmassify", if not, change text to "Christmassify"
  if (christmassifierBtn.innerText.toLowerCase() === 'christmassify') {
    // Stretch goal:
    // - Play Christmas music when Christmas class is added.
    renderAudioElement()
    greeting.classList.add('christmassified')
    christmassifierBtn.innerText = 'De-christmassify'
  } else if (
    christmassifierBtn.innerText.toLowerCase() === 'de-christmassify'
  ) {
    container.removeChild(container.lastElementChild)
    greeting.classList.remove('christmassified')
    christmassifierBtn.innerText = 'Christmassify'
  }
}

christmassifierBtn.addEventListener('click', christmassifyName)

// Stretch goals:
// - Play Christmas music when Christmas class is added.
// - Remove the Christmas class after a given time.
