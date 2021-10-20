//Mobile menu
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navBar = document.querySelector(".navbar");
const navLink = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
	hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
	 navBar.classList.toggle("active");
}

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove(".active");
    navMenu.classList.remove(".active");
}

//Typing of text
const chText = 'это быстрая и надежная доставка вашего груза из Китая! звони нам по номеру +996701544405';

let i = 0;
let speed = 70;

function type(){
    if (i < chText.length) {
    document.querySelector('#charAtText').textContent += chText.charAt(i);
    i++;
    setTimeout(type, speed);
    }
}
type();

