/**
 * Gradients
 */

import { overlay, backBtn } from './dom'
import { getRandomIntFromInterval } from './helpers'

export let currentImages = []

export function createGradients() {
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
  for (let i = 0; i <= 6; i++) {
    const randHeight = getRandomIntFromInterval(50, 300)
    const randTop = getRandomIntFromInterval(10, 90)
    const randLeft = getRandomIntFromInterval(0, 25)

    const randSrc = sources[getRandomIntFromInterval(0, sources.length - 1)]

    const image = document.createElement('img')
    image.setAttribute('src', `resources/${randSrc}.svg`)
    image.setAttribute('height', randHeight)

    image.style.position = 'absolute'
    image.style.top = `${randTop}%`
    image.style.left = `${randLeft}%`

    overlay.appendChild(image)
    currentImages.push(image)
  }

  /* Teen */
  for (let i = 0; i <= 6; i++) {
    const randWidth = getRandomIntFromInterval(50, 300)
    const randTop = getRandomIntFromInterval(10, 90)
    const randLeft = getRandomIntFromInterval(25, 50)

    const randSrc = sources[getRandomIntFromInterval(0, sources.length - 1)]

    const image = document.createElement('img')
    image.setAttribute('src', `resources/${randSrc}.svg`)
    image.setAttribute('width', randWidth)

    image.style.position = 'absolute'
    image.style.top = `${randTop}%`
    image.style.left = `${randWidth - randLeft}%`

    console.log(image.style.left)

    overlay.appendChild(image)
    currentImages.push(image)
  }

  /* Young adult */
  for (let i = 0; i <= 6; i++) {
    const randHeight = getRandomIntFromInterval(50, 300)
    const randTop = getRandomIntFromInterval(10, 90)
    const randLeft = getRandomIntFromInterval(50, 75)

    const randSrc = sources[getRandomIntFromInterval(0, sources.length - 1)]

    const image = document.createElement('img')
    image.setAttribute('src', `resources/${randSrc}.svg`)
    image.setAttribute('height', randHeight)

    image.style.position = 'absolute'
    image.style.top = `${randTop}%`
    image.style.left = `${randLeft}%`

    overlay.appendChild(image)
    currentImages.push(image)
  }

  /* Adult */
  for (let i = 0; i <= 6; i++) {
    const randHeight = getRandomIntFromInterval(50, 300)
    const randTop = getRandomIntFromInterval(10, 90)
    const randLeft = getRandomIntFromInterval(75, 100)

    const randSrc = sources[getRandomIntFromInterval(0, sources.length - 1)]

    const image = document.createElement('img')
    image.setAttribute('src', `resources/${randSrc}.svg`)
    image.setAttribute('height', randHeight)

    image.style.position = 'absolute'
    image.style.top = `${randTop}%`
    image.style.left = `${randLeft}%`

    overlay.appendChild(image)
    currentImages.push(image)
  }
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
