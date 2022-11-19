import InputHandler from './class/InputHandler.js'

window.addEventListener('load', () => {
  // canvas setup
  const canvas = document.getElementById('canvas')
  const ctx = canvas.getContext('2d')
  canvas.width = 1024
  canvas.height = 768

  class Game {
    constructor(width, height) {
      this.width = width
      this.height = height
      this.mouse = new InputHandler(this)
    }

    update() {}

    draw(context) {
      this.mouse.draw(context)
      context.clearRect(0, 0, canvas.width, canvas.heigth)
    }
  }

  const game = new Game(
    canvas.width,
    canvas.height,
    canvas.offsetLeft,
    canvas.offsetTop
  )
  function animate() {
    requestAnimationFrame(animate)
    game.update()
    game.draw(ctx)
  }

  animate()
})
