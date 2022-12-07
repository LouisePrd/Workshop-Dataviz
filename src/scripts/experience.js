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

  let res

  if (window.localStorage.getItem('data') === null) {
    res = await fetchData()
  } else {
    res = window.localStorage.getItem('data')
  }

  const data = JSON.parse(res)

  let isVisible = false

  createLines(data)
})
