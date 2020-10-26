let main = document.getElementById('main')
let altura = main.offsetTop
window.addEventListener('scroll', () => {
  if (window.pageYOffset > altura)
    main.classList.add('stick')
  else 
    main.classList.remove('stick')
})