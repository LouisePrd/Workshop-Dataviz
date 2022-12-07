/**
 * Lines
 */

import { overlay, tooltip } from './dom'
import { createGradients } from './gradients'

let amount = 10

export function createLines(data) {
  let paths = []

  for (let i = 0; i < data.length; i++) {
    // Get positive values
    const childValues = Object.values(data[i].moods.child.positive)
    const teenValues = Object.values(data[i].moods.teen.positive)
    const yaValues = Object.values(data[i].moods.ya.positive)
    const adultValues = Object.values(data[i].moods.adult.positive)

    const childSum = childValues.reduce((accumulator, value) => {
      return accumulator + value
    }, 0)

    const teenSum = teenValues.reduce((accumulator, value) => {
      return accumulator + value
    }, 0)

    const yaSum = yaValues.reduce((accumulator, value) => {
      return accumulator + value
    }, 0)

    const adultSum = adultValues.reduce((accumulator, value) => {
      return accumulator + value
    }, 0)

    const sum = childSum + teenSum + yaSum + adultSum

    // Create a path
    let path = new Path({
      strokeColor: [0.5],
      strokeWidth: 3,
      strokeCap: 'round',
      strokeJoin: 'round',
    })

    for (let j = 0; j <= amount; j++) {
      // let nv = noise.simplex2(event.time / 10, event.time / 10)

      path.add(new Point(j * 200, 0))
      path.smooth({ type: 'continuous' })
    }

    path.onMouseEnter = function (event) {
      path.strokeColor = [1]
      path.strokeWidth = 3

      tooltip.classList.add('visible')
      tooltip.style.top = `${event.point.y}px`
      tooltip.innerHTML = `${data[i].name}, ${data[i].age} ans`

      document.body.style.cursor = 'pointer'

      console.log(sum)

      // view.pause()
    }

    path.onMouseLeave = function (event) {
      path.strokeColor = [0.5]
      path.strokeWidth = 3
      tooltip.classList.remove('visible')

      document.body.style.cursor = 'auto'

      // view.play()
    }

    path.onClick = function (event) {
      path.strokeColor = [1]
      console.log(`Display the user canvas for: ${data[i].name}`)
      console.log(data[i].moods.child)
      overlay.classList.toggle('visible')
      isVisible = true

      // createGradients(data[i])
    }

    paths.push({ path, sum })
  }

  view.onFrame = function (event) {
    paths.forEach((child, i) => {
      // let nv = noise.simplex2(event.time / 10, event.time / 10)

      for (let j = 0; j <= amount; j++) {
        let segment = child.path.segments[j]

        // A cylic value between -1 and 1 and affected by sum
        let sinus = Math.sin((event.time / 100) * i * 0.5 + j)

        // Change the y position of the segment point
        segment.point.y = view.size.height / 2 + sinus * child.sum
      }
    })
  }

  return paths
}
