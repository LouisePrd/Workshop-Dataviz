/**
 * Experience
 */

import paper, { view } from 'paper'
import { currentImages, overlay } from './utils/gradients'
import { createLines } from './utils/lines'
import { overlay, backBtn } from './utils/dom'

paper.install(window)

window.addEventListener('load', () => {
  paper.setup('mainCanvas')

  // Init a tool
  // let tool = new Tool()

  let isVisible = false

  createLines()
})
