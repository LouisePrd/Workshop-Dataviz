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
 
   /* Child */
 
   let positiveData = data.moods.child.positive
   let negativeData = data.moods.child.negative
   let sizeMoodList =
     Object.keys(positiveData).length + Object.keys(negativeData).length
 
   let idNegative = 0
   let mood
   let rate
   let rateSize
 
   for (let i = 0; i < sizeMoodList; i++) {
     if (i < sizeMoodList / 2) {
       mood = Object.keys(positiveData)[i]
       rate = Object.values(positiveData)[i]
     } else {
       mood = Object.keys(negativeData)[idNegative]
       rate = Object.values(negativeData)[idNegative]
       idNegative++
     }
 
     const divGradient1 = document.createElement('div')
     const divGradient2 = document.createElement('div')
 
     divGradient1.classList.add(mood, 'div1', 'mainDiv')
     divGradient2.classList.add(mood, 'div2', 'mainDiv')
 
     rateSize = rate * 52

     divGradient1.style.height = rateSize + 'px'
     divGradient2.style.height = rateSize + 'px'
 
     divGradient1.style.width = rateSize + 'px'
     divGradient2.style.width = rateSize + 'px'
 
     divGradient1.style.position = 'absolute'
     divGradient2.style.position = 'absolute'
 
     const randTop = getRandomIntFromInterval(10, 90)
     const randLeft = getRandomIntFromInterval(0, 25)
 
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