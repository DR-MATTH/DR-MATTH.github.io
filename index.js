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

alto.textContent = window.innerHeight
ancho.textContent = window.innerWidth

window.addEventListener('resize', () => {
  alto.textContent = window.innerHeight
  ancho.textContent = window.innerWidth
})
