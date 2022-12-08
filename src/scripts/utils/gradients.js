/**
 * Gradients
 */

import paper, { view } from 'paper'
import { overlay, backBtn, cw, cw2, ch, ch2 } from './dom'
import { getRandomIntFromInterval } from './helpers'
import { overlay, backBtn } from './dom'

export let tabGradients = []

export function createGradients(data) {
  // TODO: debug
  paper.setup('userCanvas')

  let idNegative = 0
  let mood
  let rate
  let rateSize

  /* Child */

  let positiveDataChild = data.moods.child.positive
  let negativeDataChild = data.moods.child.negative
  let sizeMoodList =
    Object.keys(positiveDataChild).length +
    Object.keys(negativeDataChild).length

  for (let i = 0; i < sizeMoodList; i++) {
    if (i < sizeMoodList / 2) {
      mood = Object.keys(positiveDataChild)[i]
      rate = Object.values(positiveDataChild)[i]
    } else {
      mood = Object.keys(negativeDataChild)[idNegative]
      rate = Object.values(negativeDataChild)[idNegative]
      idNegative++
    }

    const divGradient1 = document.createElement('div')
    const divGradient2 = document.createElement('div')

    divGradient1.classList.add(mood, 'div1', 'mainDiv')
    divGradient2.classList.add(mood, 'div2', 'mainDiv')

    rateSize = rate * 50

    divGradient1.style.height = rateSize + 'px'
    divGradient2.style.height = rateSize + 'px'

    divGradient1.style.width = rateSize + 'px'
    divGradient2.style.width = rateSize + 'px'

    divGradient1.style.position = 'absolute'
    divGradient2.style.position = 'absolute'

    const randTop = getRandomIntFromInterval(10, 90)
    const randLeft = getRandomIntFromInterval(0, 19)

    divGradient1.style.top = `${randTop}%`
    divGradient2.style.top = `${randTop}%`

    divGradient1.style.left = `${randLeft}%`
    divGradient2.style.left = `${randLeft}%`

    tabGradients.push(divGradient1)
    tabGradients.push(divGradient2)
  }

  /* Teen */

  let positiveDataTeen = data.moods.teen.positive
  let negativeDataTeen = data.moods.teen.negative

  idNegative = 0

  for (let i = 0; i < sizeMoodList; i++) {
    if (i < sizeMoodList / 2) {
      mood = Object.keys(positiveDataTeen)[i]
      rate = Object.values(positiveDataTeen)[i]
    } else {
      mood = Object.keys(negativeDataTeen)[idNegative]
      rate = Object.values(negativeDataTeen)[idNegative]
      idNegative++
    }

    const divGradient1 = document.createElement('div')
    const divGradient2 = document.createElement('div')

    divGradient1.classList.add(mood, 'div1', 'mainDiv')
    divGradient2.classList.add(mood, 'div2', 'mainDiv')

    rateSize = rate * 50

    divGradient1.style.height = rateSize + 'px'
    divGradient2.style.height = rateSize + 'px'

    divGradient1.style.width = rateSize + 'px'
    divGradient2.style.width = rateSize + 'px'

    divGradient1.style.position = 'absolute'
    divGradient2.style.position = 'absolute'

    const randTop = getRandomIntFromInterval(10, 90)
    const randLeft = getRandomIntFromInterval(27, 46)

    divGradient1.style.top = `${randTop}%`
    divGradient2.style.top = `${randTop}%`

    divGradient1.style.left = `${randLeft}%`
    divGradient2.style.left = `${randLeft}%`

    tabGradients.push(divGradient1)
    tabGradients.push(divGradient2)
  }

  /* Young adult */

  let positiveDataYa = data.moods.ya.positive
  let negativeDataYa = data.moods.ya.negative

  idNegative = 0

  for (let i = 0; i < sizeMoodList; i++) {
    if (i < sizeMoodList / 2) {
      mood = Object.keys(positiveDataYa)[i]
      rate = Object.values(positiveDataYa)[i]
    } else {
      mood = Object.keys(negativeDataYa)[idNegative]
      rate = Object.values(negativeDataYa)[idNegative]
      idNegative++
    }

    const divGradient1 = document.createElement('div')
    const divGradient2 = document.createElement('div')

    divGradient1.classList.add(mood, 'div1', 'mainDiv')
    divGradient2.classList.add(mood, 'div2', 'mainDiv')

    rateSize = rate * 50

    divGradient1.style.height = rateSize + 'px'
    divGradient2.style.height = rateSize + 'px'

    divGradient1.style.width = rateSize + 'px'
    divGradient2.style.width = rateSize + 'px'

    divGradient1.style.position = 'absolute'
    divGradient2.style.position = 'absolute'

    const randTop = getRandomIntFromInterval(10, 90)
    const randLeft = getRandomIntFromInterval(54, 73)

    divGradient1.style.top = `${randTop}%`
    divGradient2.style.top = `${randTop}%`

    divGradient1.style.left = `${randLeft}%`
    divGradient2.style.left = `${randLeft}%`

    tabGradients.push(divGradient1)
    tabGradients.push(divGradient2)
  }

  /* Adult */

  let positiveDataAdult = data.moods.adult.positive
  let negativeDataAdult = data.moods.adult.negative

  idNegative = 0

  for (let i = 0; i < sizeMoodList; i++) {
    console.log(i)
    if (i < sizeMoodList / 2) {
      mood = Object.keys(positiveDataAdult)[i]
      rate = Object.values(positiveDataAdult)[i]
    } else {
      mood = Object.keys(negativeDataAdult)[idNegative]
      rate = Object.values(negativeDataAdult)[idNegative]
      idNegative++
    }

    const divGradient1 = document.createElement('div')
    const divGradient2 = document.createElement('div')

    divGradient1.classList.add(mood, 'div1', 'mainDiv')
    divGradient2.classList.add(mood, 'div2', 'mainDiv')

    rateSize = rate * 50

    divGradient1.style.height = rateSize + 'px'
    divGradient2.style.height = rateSize + 'px'

    divGradient1.style.width = rateSize + 'px'
    divGradient2.style.width = rateSize + 'px'

    divGradient1.style.position = 'absolute'
    divGradient2.style.position = 'absolute'

    const randTop = getRandomIntFromInterval(10, 90)
    const randLeft = getRandomIntFromInterval(81, 100)

    divGradient1.style.top = `${randTop}%`
    divGradient2.style.top = `${randTop}%`

    divGradient1.style.left = `${randLeft}%`
    divGradient2.style.left = `${randLeft}%`

    tabGradients.push(divGradient1)
    tabGradients.push(divGradient2)
  }
  

  for (let i = 0; i < tabGradients.length; i++) {
    overlay.appendChild(tabGradients[i])
  }
}



backBtn.addEventListener('click', () => {
  overlay.classList.toggle('visible')

  isVisible = false
  view.play()

  for (let i = 0; i < tabGradients.length; i++) {
    overlay.removeChild(tabGradients[i])
  }

  tabGradients = []
})
