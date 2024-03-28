

const moon = document.querySelector('.moon');
const sun = document.querySelector('.sun');
const body = document.querySelector('body');

const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const logo = document.querySelector('.logo');
const btn = document.querySelector('.btn');
const heroLine = document.querySelector('.hero-line');


moon.addEventListener('click', function(){
    body.classList.add('dark-bg-color')
    logo.classList.add('green-white-color')
    h1.classList.add('green-white-color')
    p.classList.add('green-white-color')
    btn.classList.add('btn-color')
    heroLine.classList.add('green-bg-color')

    moon.style.display = 'none'
    sun.style.display = 'block'
    sun.style.color = '#fff'
})

sun.addEventListener('click', function(){
    body.classList.remove('dark-bg-color')
    logo.classList.remove('green-white-color')
    h1.classList.remove('green-white-color')
    p.classList.remove('green-white-color')
    btn.classList.remove('btn-color')
    heroLine.classList.remove('green-bg-color')

    moon.style.display = 'block'
    sun.style.display = 'none'
})