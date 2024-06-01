// sticky navbar javascript code below here
window.addEventListener('scroll',function(){
    const navbarSticky=document.querySelector('.header');
    navbarSticky.classList.toggle("sticky",window.scrollY>75);

});


const navbarMenu = document.getElementById('navbar');
const burgerMenu = document.getElementById('burger');
const overlayMenu = document.getElementById('overlay');
const closedMenu = document.querySelector("#closed-menu");
// Toggle Menu Function
burgerMenu.addEventListener('click', toggleMenu);
overlayMenu.addEventListener('click', toggleMenu);
closedMenu.addEventListener("click", toggleMenu);


function toggleMenu() {
	navbarMenu.classList.toggle('active');
	overlayMenu.classList.toggle('active');
	closedMenu.classList.toggle('active');

}
