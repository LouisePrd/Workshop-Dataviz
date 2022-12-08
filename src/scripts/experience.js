/**
 * Experience
 */

import paper, { view } from 'paper'
import { currentImages, overlay } from './utils/gradients'
import { createLines } from './utils/lines'
import { splash, startBtn, overlay, canvas } from './utils/dom'
import { fetchData } from './utils/database'

paper.install(window)
paper.setup('mainCanvas')
view.pause()

window.addEventListener('load', async () => {
  canvas.style.display = "none"

  startBtn.addEventListener('click', () => {
    splash.classList.remove('visible')
    canvas.style.display = "block"
  })

  let res

  if (window.localStorage.getItem('data') === null) {
    res = await fetchData()
  } else {
    res = JSON.parse(window.localStorage.getItem('data'))
  }

  const data = res

  let isVisible = false

  createLines(data)
})
