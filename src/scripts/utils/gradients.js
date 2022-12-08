/**
 * Gradients
 */

import { overlay, overlayTitle, overlayWrapper, backBtn, filterPositiveBtn, filterNegativeBtn} from './dom'
import { getRandomIntFromInterval } from './helpers'

export let tabGradients = []

export function createGradients(data) {

  let idNegative = 0
  let mood
  let rate
  let rateSize
  let age
  let moodType

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
      moodType = 'positive'
    } else {
      mood = Object.keys(negativeDataChild)[idNegative]
      rate = Object.values(negativeDataChild)[idNegative]
      moodType = 'negative'
      idNegative++
    }

    const divGradient1 = document.createElement('div')
    const divGradient2 = document.createElement('div')

    divGradient1.classList.add(mood, 'div1', 'mainDiv')
    divGradient2.classList.add(mood, 'div2', 'mainDiv')

    rateSize = rate * 50

    divGradient1.style.height = 'inherit'
    divGradient2.style.height = 'inherit'

    divGradient1.style.width = 'inherit'
    divGradient2.style.width = 'inherit'

    divGradient1.style.position = 'inherit'
    divGradient2.style.position = 'inherit'

    const randTop = getRandomIntFromInterval(10, 90)
    const randLeft = getRandomIntFromInterval(0, 19)
    
    age = 'child'
    const wrapperDiv = document.createElement('div')
    wrapperDiv.classList.add(`${age}${mood}`, moodType)
    
    wrapperDiv.style.width = rateSize + 'px'
    wrapperDiv.style.height = rateSize + 'px'
    wrapperDiv.style.position = 'absolute'
    wrapperDiv.style.top = `${randTop}%`
    wrapperDiv.style.left = `${randLeft}%`

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
      moodType = 'positive'
    } else {
      mood = Object.keys(negativeDataTeen)[idNegative]
      rate = Object.values(negativeDataTeen)[idNegative]
      moodType = 'negative'
      idNegative++
    }

    const divGradient1 = document.createElement('div')
    const divGradient2 = document.createElement('div')

    divGradient1.classList.add(mood, 'div1', 'mainDiv')
    divGradient2.classList.add(mood, 'div2', 'mainDiv')

    rateSize = rate * 50

    divGradient1.style.height = 'inherit'
    divGradient2.style.height = 'inherit'

    divGradient1.style.width = 'inherit'
    divGradient2.style.width = 'inherit'

    divGradient1.style.position = 'inherit'
    divGradient2.style.position = 'inherit'

    const randTop = getRandomIntFromInterval(10, 90)
    const randLeft = getRandomIntFromInterval(27, 46)

    age = 'teen'
    const wrapperDiv = document.createElement('div')
    wrapperDiv.classList.add(`${age}${mood}`, moodType)

    wrapperDiv.style.width = rateSize + 'px'
    wrapperDiv.style.height = rateSize + 'px'
    wrapperDiv.style.position = 'absolute'
    wrapperDiv.style.top = `${randTop}%`
    wrapperDiv.style.left = `${randLeft}%`

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
      moodType = 'positive'
    } else {
      mood = Object.keys(negativeDataYa)[idNegative]
      rate = Object.values(negativeDataYa)[idNegative]
      moodType = 'negative'
      idNegative++
    }

    const divGradient1 = document.createElement('div')
    const divGradient2 = document.createElement('div')

    divGradient1.classList.add(mood, 'div1', 'mainDiv')
    divGradient2.classList.add(mood, 'div2', 'mainDiv')

    rateSize = rate * 50

    divGradient1.style.height = 'inherit'
    divGradient2.style.height = 'inherit'

    divGradient1.style.width = 'inherit'
    divGradient2.style.width = 'inherit'

    divGradient1.style.position = 'inherit'
    divGradient2.style.position = 'inherit'

    const randTop = getRandomIntFromInterval(10, 90)
    const randLeft = getRandomIntFromInterval(54, 73)

    age = 'ya'
    const wrapperDiv = document.createElement('div')
    wrapperDiv.classList.add(`${age}${mood}`, moodType)

    wrapperDiv.style.width = rateSize + 'px'
    wrapperDiv.style.height = rateSize + 'px'
    wrapperDiv.style.position = 'absolute'
    wrapperDiv.style.top = `${randTop}%`
    wrapperDiv.style.left = `${randLeft}%`

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
      moodType = 'positive'
    } else {
      mood = Object.keys(negativeDataAdult)[idNegative]
      rate = Object.values(negativeDataAdult)[idNegative]
      moodType = 'negative'
      idNegative++
    }

    const divGradient1 = document.createElement('div')
    const divGradient2 = document.createElement('div')

    divGradient1.classList.add(mood, 'div1', 'mainDiv')
    divGradient2.classList.add(mood, 'div2', 'mainDiv')

    rateSize = rate * 50

    divGradient1.style.height = 'inherit'
    divGradient2.style.height = 'inherit'

    divGradient1.style.width = 'inherit'
    divGradient2.style.width = 'inherit'

    divGradient1.style.position = 'inherit'
    divGradient2.style.position = 'inherit'

    const randTop = getRandomIntFromInterval(10, 90)
    const randLeft = getRandomIntFromInterval(81, 100)

    age = 'adult'
    const wrapperDiv = document.createElement('div')
    wrapperDiv.classList.add(`${age}${mood}`, moodType)

    wrapperDiv.style.width = rateSize + 'px'
    wrapperDiv.style.height = rateSize + 'px'
    wrapperDiv.style.position = 'absolute'
    wrapperDiv.style.top = `${randTop}%`
    wrapperDiv.style.left = `${randLeft}%`
    
    wrapperDiv.appendChild(divGradient1)
    wrapperDiv.appendChild(divGradient2)

    tabGradients.push(wrapperDiv)
  }

  tabGradients.forEach((child, i) => {
    overlayWrapper.appendChild(tabGradients[i])
  })

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

filterPositiveBtn.addEventListener('click', () => {
  console.log(tabGradients)
  console.log('positive')
  filterPositiveBtn.classList.add('active')
  filterNegativeBtn.classList.remove('active')
})

filterNegativeBtn.addEventListener('click', () => {
  console.log('negative')
  filterPositiveBtn.classList.remove('active')
  filterNegativeBtn.classList.add('active')
})