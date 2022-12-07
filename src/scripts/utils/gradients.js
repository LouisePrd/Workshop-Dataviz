/**
 * Gradients
 */

import paper, { view } from 'paper'
import { overlay, backBtn, cw, cw2, ch, ch2 } from './dom'
import { getRandomIntFromInterval } from './helpers'

export let currentImages = []

export function createGradients() {
  paper.setup('userCanvas')

  const sources = [
    'shame',
    'love',
    'anger',
    'anxiety',
    'frustration',
    'fear',
    'jealousy',
    'loneliness',
    'boredom',
    'pleasure',
    'inspiration',
    'regret',
    'relief',
    'sadness',
    'satisfaction',
  ]

  /* Child */
  for (let i = 0; i < 5; i++) {
    const maxWidth = view.size.width
    const maxHeight = view.size.height

    const randSrc = sources[getRandomIntFromInterval(0, sources.length - 1)]
    const randPos = {
      x: getRandomIntFromInterval(0, maxWidth),
      y: getRandomIntFromInterval(0, maxHeight),
    }
    const randScale = getRandomIntFromInterval(100, 300)

    let url = `./resources/${randSrc}.svg`
    let raster = new Raster(url)

    Raster.prototype.rescale = function (width, height) {
      this.scale(width / this.width, height / this.height)
    }

    raster.onLoad = function () {
      raster.setPosition({ ...randPos })
      raster.rescale(randScale, randScale)
    }
  }

  /* Teen */

  /* Young adult */

  /* Adult */
}

backBtn.addEventListener('click', () => {
  overlay.classList.toggle('visible')

  isVisible = false
  view.play()

  console.log(paper.projects)

  currentImages.map((child) => {
    child.remove()
  })
  currentImages = []
})
