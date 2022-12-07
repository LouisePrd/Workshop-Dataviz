/**
 * Lines
 */

import { Noise } from 'noisejs'
import { overlay } from './dom'
import { createGradients } from './gradients'

let amount = 10
let height = 60
let users = 28

let noise = new Noise(Math.random())

export function createLines() {
  let paths = []

  for (let i = 0; i <= users; i++) {
    // Create a path
    let path = new Path({
      strokeColor: [0.5],
      strokeWidth: 3,
      strokeCap: 'round',
      strokeJoin: 'round',
    })

    for (let j = 0; j <= amount; j++) {
      path.add(new Point(j * 200, 50 * i))
      path.smooth({ type: 'continuous' })
    }

    path.onMouseEnter = function (event) {
      path.strokeColor = [1]
      path.strokeWidth = 6
      // document.body.style.cursor = 'pointer'
    }

    path.onMouseLeave = function (event) {
      path.strokeColor = [0.5]
      path.strokeWidth = 3
      // document.body.style.cursor = 'auto'
    }

    path.onClick = function (event) {
      path.strokeColor = [1]
      console.log(`Display the user canvas at id: ${i + 1}`)

      view.pause()
      overlay.classList.toggle('visible')
      isVisible = true

      createGradients()
    }

    paths.push(path)
  }

  view.onFrame = function (event) {
    // Optimize this ?
    let nv = noise.simplex2(event.time / 10, event.time / 10)

    paths.map((path, index) => {
      for (let i = 0; i <= amount; i++) {
        let segment = path.segments[i]

        // A cylic value between -1 and 1 modified by map and for loop indexes
        let sinus = Math.sin((event.time / 10 + nv) * 0.5 + i * index)

        // Change the y position of the segment point
        segment.point.y = sinus * height + index * 30
      }
    })
  }
}
