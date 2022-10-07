const menu = document.querySelector('.menu')
const nav = document.querySelector('nav')

menu.addEventListener('click', () => {
    nav.classList.add('open-nav');
})

nav.addEventListener('click', () => {
    nav.classList.remove('open-nav');
})

//menu.addEventListener('click', () => {
   // nav.classList.remove('open-nav');
//})

