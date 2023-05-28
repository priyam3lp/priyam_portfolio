burger = document.querySelector('.burger');
rightNav = document.querySelector('.right-nav');
navbar = document.querySelector('.navbar');

burger.addEventListener('click', () => {
    rightNav.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp')
})

btn = document.querySelector('.home-button');
btn.addEventListener('click', () => {
    window.open("https://github.com/priyam3lp", "_blank");
})