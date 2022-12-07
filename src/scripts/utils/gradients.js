/**
 * Gradients
 */

import paper, { view } from 'paper'
import { overlay, backBtn, cw, cw2, ch, ch2 } from './dom'
import { getRandomIntFromInterval } from './helpers'
import { overlay, backBtn } from './dom'

export let currentImages = []

export function createGradients(data) {
  // TODO: debug
  paper.setup('userCanvas')

  // console.log(data)

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

  const sizeMoodList = Object.keys(data.moods.period.child).length

  console.log(data.moods.period.child)
  for (let i = 0; i < sizeMoodList; i++) {
    const randHeight = getRandomIntFromInterval(50, 300)
    const randTop = getRandomIntFromInterval(10, 90)
    const randLeft = getRandomIntFromInterval(0, 25)

    const divGradient1 = document.createElement('div')
    const divGradient2 = document.createElement('div')

    // add class
    divGradient1.classList.add('divGradient', 'one')
    divGradient2.classList.add('divGradient', 'two')


    // image.setAttribute('src', `resources/${randSrc}.svg`)
    // image.setAttribute('height', randHeight)
    // image.style.position = 'absolute'
    // image.style.top = `${randTop}%`
    // image.style.left = `${randLeft}%`

    // overlay.appendChild(image) // tableau
    // currentImages.push(image)
  }

  /* Teen */

  /* Young adult */

  /* Adult */
}

backBtn.addEventListener('click', () => {
  overlay.classList.toggle('visible')

  isVisible = false
  view.play()

  currentImages.map((child) => {
    child.remove()
  })
  currentImages = []
})
