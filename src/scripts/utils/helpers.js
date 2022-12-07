/**
 * Helpers
 */

/* Handle cases when canvas is empty */
export function isCanvasBlank(canvas) {
  return !canvas
    .getContext('2d')
    .getImageData(0, 0, canvas.width, canvas.height)
    .data.some((channel) => channel !== 0)
}

/* Returns a random number between a min and a max value */
export function getRandomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}
