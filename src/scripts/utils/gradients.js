/**
 * Gradients
 */

import { overlay, overlayTitle, overlayWrapper, backBtn } from './dom'
import { getRandomIntFromInterval } from './helpers'

export let tabGradients = []

export function createGradients(data) {

  let idNegative = 0
  let mood
  let rate
  let rateSize
  let age

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

    age = 'child'
    const wrapperDiv = document.createElement('div')
    wrapperDiv.classList.add(`${age}${mood}`)

    wrapperDiv.appendChild(divGradient1)
    wrapperDiv.appendChild(divGradient2)

    tabGradients.push(wrapperDiv)
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

    age = 'teen'
    const wrapperDiv = document.createElement('div')
    wrapperDiv.classList.add(`${age}${mood}`)

    wrapperDiv.appendChild(divGradient1)
    wrapperDiv.appendChild(divGradient2)

    tabGradients.push(wrapperDiv)
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

    age = 'ya'
    const wrapperDiv = document.createElement('div')
    wrapperDiv.classList.add(`${age}${mood}`)    

    wrapperDiv.appendChild(divGradient1)
    wrapperDiv.appendChild(divGradient2)

    tabGradients.push(wrapperDiv)
  }

  /* Adult */

  let positiveDataAdult = data.moods.adult.positive
  let negativeDataAdult = data.moods.adult.negative

  idNegative = 0

  for (let i = 0; i < sizeMoodList; i++) {
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

    age = 'adult'
    const wrapperDiv = document.createElement('div')
    wrapperDiv.classList.add(`${age}${mood}`)    
    
    wrapperDiv.appendChild(divGradient1)
    wrapperDiv.appendChild(divGradient2)

    tabGradients.push(wrapperDiv)
  }

  for (let i = 0; i < tabGradients.length; i++) {
    overlayWrapper.appendChild(tabGradients[i])
  }

  // for (let i = 0; i < tabGradients.length; i++) {
  //   overlayWrapper.appendChild(tabGradients[i])
  // }
}



backBtn.addEventListener('click', () => {
  overlay.classList.remove('visible')
  overlayTitle.classList.remove('animate')

  isVisible = false

  for (let i = 0; i < tabGradients.length; i++) {
    overlayWrapper.removeChild(tabGradients[i])
  }

  tabGradients = []
})
