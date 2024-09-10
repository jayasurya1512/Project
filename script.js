let menuBtn = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .bars .nav-bar');

menuBtn.onclick = () =>{
    menuBtn.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}