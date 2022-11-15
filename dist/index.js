import InputHandler from './class/InputHandler'
import Layer from './class/Layer'

window.addEventListener('load', () => {
  // canvas setup
  const canvas = document.getElementById('canvas')
  const ctx = canvas.getContext('2d')
  canvas.width = 1024
  canvas.height = 768

  const mouse = new InputHandler(ctx)
  const layer = new Layer(ctx)
})
