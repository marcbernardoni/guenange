export default class InputHandler {
  constructor(game) {
    this.game = game
    this.radius = 20
    this.sAngle = 0 // The starting angle in radians
    this.eAngle = 2 * Math.PI // The ending angle in radians
    this.debugMode = true

    window.addEventListener('mousemove', (event) => {
      event.preventDefault()
      event.stopPropagation()
      if (event.target.id === 'canvas') {
        this.mouseX = event.layerX
        this.mouseY = event.layerY
      }
    })

    if (this.debugMode) {
      this.debugModeOn()
    }
  }

  static debugModeOn() {
    const div = document.createElement('div')
    div.id = 'debug'
    div.innerHTML =
      '<p>Position de la souris en abscisse (axe des X) : <span class="coordX"></span></p>'
    div.innerHTML +=
      '<p>Position de la souris en ordonnée (axe des Y) : <span class="coordY"></span></p>'
    document.body.appendChild(div)
  }

  static update() {}

  draw(context) {
    context.fillStyle = '#4d79bc'
    context.fillRect(0, 0, this.game.width, this.game.height)

    if (this.debugMode) {
      const eX = document.querySelector('.coordX')
      const eY = document.querySelector('.coordY')
      eX.innerHTML = this.mouseX
      eY.innerHTML = this.mouseY
      context.beginPath()
      context.arc(
        this.mouseX,
        this.mouseY,
        this.radius,
        this.sAngle,
        this.eAngle
      )
      context.stroke()
    }
  }
}
