let main = document.getElementById('main')
let altura = main.offsetTop
window.addEventListener('scroll', () => {
  if (window.pageYOffset > altura)
    main.classList.add('stick')
  else 
    main.classList.remove('stick')
})

let alto = document.getElementById('alto')
let ancho = document.getElementById('ancho')
let alto2 = document.getElementById('alto2')
let ancho2 = document.getElementById('ancho2')

alto.textContent = alto2.textContent = window.innerHeight
ancho.textContent = ancho2.textContent = window.innerWidth

window.addEventListener('resize', () => {
  alto.textContent = window.innerHeight
  ancho.textContent = window.innerWidth
})
window.addEventListener('orientationchange', () => {
  alto2.textContent = window.innerHeight
  ancho2.textContent = window.innerWidth
})