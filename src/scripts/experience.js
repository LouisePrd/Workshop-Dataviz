// import { GameApp } from './utils/classes/GameApp'

// const app = new GameApp(document.body, window.innerWidth, window.innerHeight)

import paper, { view } from 'paper'
// import { Noise } from 'noisejs'

// let noise_seed = Math.random()
// const NOISE_GENERATOR = new Noise(noise_seed)
const CANVAS = document.getElementById('visualizer')
const NUM_CURVES = 30
const PATH_SEGMENT_LENGTH = 20
const X_SPACING = CANVAS.clientWidth / NUM_CURVES
const Y_SPACING = CANVAS.clientHeight / PATH_SEGMENT_LENGTH

window.onload = function () {
  paper.setup(CANVAS)
  paper.install(window)
  view.onFrame = animate
  init()
}

const init = () => {
  render_curves()
}

const render_curves = () => {
  for (let i = 0; i <= NUM_CURVES; i++) {
    // const myPath = new Path()
    // myPath.selected = true
    // myPath.strokeColor = '#00c0c0'
    // myPath.add(new Point(i * X_SPACING, 0))

    const path = new Path()
    path.strokeColor = 'black'
    path.add(new Point(30, 30))
    path.add(new Point(100, 100))
  }
}

function animate(event) {
  // seed = seed + 0.0025
  // 0.3 * noise.simplex2(noise_seed + ix / 40, noise_seed + iy / 180)
}
