const playBtn = document.getElementById('play-btn')
const pauseBtn = document.getElementById('pause-btn')
const stopBtn = document.getElementById('stop-btn')

// Task:
// - Add the functionality to play, pause and stop the jingling bells (bells.mp3).
const audioEl = new Audio('bells.mp3')

playBtn.addEventListener('click', () => audioEl.play())
pauseBtn.addEventListener('click', () => audioEl.pause())
stopBtn.addEventListener('click', () => {
  audioEl.pause()
  audioEl.currentTime = 0
})
// Stretch goals:
// - Add volume controls.
// - Allow the user to select different sounds.
