/**
 * Dom
 */

export let canvas = document.getElementById('mainCanvas')
export let startBtn = document.querySelector('.startBtn')
export let backBtn = document.querySelector('.backBtn')
export let splash = document.querySelector('.splash')
export let overlay = document.querySelector('.overlay')
export let overlayTitle = document.querySelector('.overlay__title')
export let tooltip = document.querySelector('.tooltip')

let dpr = window.devicePixelRatio

canvas.width = window.innerWidth * dpr
canvas.height = window.innerHeight * dpr
canvas.style.maxWidth = window.innerWidth + 'px'
canvas.style.maxHeight = window.innerHeight + 'px'

export const cw = canvas.width
export const ch = canvas.height
export const cw2 = canvas.width / 2
export const ch2 = canvas.height / 2