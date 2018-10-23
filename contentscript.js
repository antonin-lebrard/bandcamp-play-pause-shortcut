
window.addEventListener('DOMContentLoaded', () => {

  const playButton = document.querySelector('.playbutton')
  if (playButton !== null) {
    document.addEventListener('keydown', (ev) => {
      if (ev.keyCode === 32) {
        playButton.click()
        ev.preventDefault()
      }
    })
  }

})
