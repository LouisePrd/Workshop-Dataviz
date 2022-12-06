// import { GameApp } from './utils/classes/GameApp'

// const app = new GameApp(document.body, window.innerWidth, window.innerHeight)

import Paper from 'paper'

function initPaper() {
  console.log(Paper)

  let path = new Paper.Path()
  path.strokeColor = 'black'
  path.add(new Point(30, 30))
  path.add(new Point(100, 100))

  const paperCanvas = document.getElementById('#visualizer')
  const project = new Paper.Project(paperCanvas)
}

window.addEventListener('load', () => {
  initPaper()
  // Do stuff
})
