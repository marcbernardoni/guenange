export default class InputHandler {
  constructor(game) {
    this.game = game
    this.width = 50
    this.height = 50
    this.elementX = document.querySelector('.coordX')
    this.elementY = document.querySelector('.coordY')
    this.mouseX = 0
    this.mouseY = 0

    window.addEventListener('mousemove', (event) => {
      event.preventDefault()
      event.stopPropagation()
      if (event.target.id === 'canvas') {
        this.mouseX = event.layerX
        this.mouseY = event.layerY
      }
    })
  }

  // update() {}

  draw(context) {
    this.elementX.innerHTML = this.mouseX
    this.elementY.innerHTML = this.mouseY

    context.beginPath()
    context.arc(this.mouseX, this.mouseY, 20, 0, Math.PI * 2)
    context.stroke()
  }
}
