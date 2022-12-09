/**
 * Experience
 */

import paper, { view } from 'paper'
import { createLines } from './utils/lines'
import { splash, startBtn, overlay, canvas } from './utils/dom'
import { fetchData } from './utils/database'

paper.install(window)
paper.setup('mainCanvas')
canvas.style.display = 'none'

window.addEventListener('load', async () => {
  startBtn.style.visibility = 'visible'

  startBtn.addEventListener('click', () => {
    splash.classList.remove('visible')
    canvas.style.display = 'block'

    setTimeout(() => {
      splash.remove()
    }, 1000)
  })

  let res

  if (window.localStorage.getItem('data') === null) {
    res = await fetchData()
  } else {
    res = JSON.parse(window.localStorage.getItem('data'))
  }

  const data = res

  createLines(data)
})
