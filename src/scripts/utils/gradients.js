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

  let positiveData = data.moods.child.positive
  let negativeData = data.moods.child.negative
  let sizeMoodList =
    Object.keys(positiveData).length + Object.keys(negativeData).length

  let idNegative = 0
  let mood
  let rate
  let rateSize

  let tabGradients = []

  for (let i = 0; i < sizeMoodList; i++) {
    if (i < sizeMoodList / 2) {
      // positive
      mood = Object.keys(positiveData)[i]
      rate = Object.values(positiveData)[i]
    } else {
      // negative
      mood = Object.keys(negativeData)[idNegative]
      rate = Object.values(negativeData)[idNegative]
      idNegative++
    }

    const divGradient1 = document.createElement('div')
    const divGradient2 = document.createElement('div')
    divGradient1.classList.add(mood, 'one')
    divGradient2.classList.add(mood, 'two')

    rateSize = rate * 60
    divGradient1.setAttribute('height', rateSize)
    divGradient2.setAttribute('height', rateSize)
    divGradient1.style.position = 'absolute'
    divGradient2.style.position = 'absolute'

    tabGradients.push(divGradient1)
    tabGradients.push(divGradient2)
    // overlay.appendChild(image) // tableau
  }

  console.log(tabGradients)

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
  // clear array
})
