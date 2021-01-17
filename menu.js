const nav = document.querySelector('nav');
const close = document.querySelector('.head .close');
const trigger = document.querySelector('.trigger');
const uniClose = document.querySelector('.attribution .close')

trigger.addEventListener('click', (e) => {
    nav.style.transform = 'scaleX(1)';
})

close.addEventListener('click', (e) => {
    nav.style.transform = 'scaleX(0)';
})

uniClose.addEventListener('click',(e) => {
    // console.log(e.target.parentElement);
    e.target.parentElement.parentElement.style.display = 'none';
})