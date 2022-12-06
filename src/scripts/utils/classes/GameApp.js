import * as PIXI from 'pixi.js'

export class GameApp {
  constructor(parent, width, height) {
    this.app = new PIXI.Application({
      width,
      height,
      backgroundColor: 0x000000,
    })
    parent.replaceChild(this.app.view, parent.lastElementChild) // Hack for parcel HMR

    this._load()
  }

  static createGradTexture() {
    const quality = 256
    const canvas = document.createElement('canvas')
    canvas.width = quality
    canvas.height = 1

    const ctx = canvas.getContext('2d')

    // Use Canvas 2D API to create gradient
    const grd = ctx.createRadialGradient(0, 0, 80, 0, 0, 600)
    grd.addColorStop(0, 'black')
    grd.addColorStop(0.5, 'red')
    grd.addColorStop(1, 'black')

    ctx.fillStyle = grd
    ctx.fillRect(0, 0, quality, 1)

    return PIXI.Texture.from(canvas)
  }

  _load() {
    const gradTexture = GameApp.createGradTexture()

    const sprite = new PIXI.Sprite(gradTexture)
    sprite.width = 500
    sprite.height = 500
    this.app.stage.addChild(sprite)
  }
}
