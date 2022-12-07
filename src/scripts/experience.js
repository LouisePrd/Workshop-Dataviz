/**
 * Experience
 */

import paper, { view } from 'paper'
import { currentImages, overlay } from './utils/gradients'
import { createLines } from './utils/lines'
import { overlay, backBtn } from './utils/dom'
import { fetchData } from './utils/database'

paper.install(window)

window.addEventListener('load', async () => {
  paper.setup('mainCanvas')

  if (window.localStorage.getItem('data') === null) {
    await fetchData()
  }

  let isVisible = false

  createLines()
})
