import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import SmoothScroll from 'smooth-scroll';
import "./css/global.css";
import "./css/header.css";
import "./css/footer.css";
import "./css/home.css";

var scroll = new SmoothScroll('a[href*="#"]');

const bodyTag = document.body;
let header = document.querySelector('.header-container');
let computedStyle = getComputedStyle(header);
let headerBoxHeight = computedStyle.height
const mobileMenu = document.getElementById("mobile-menu");
const mobileMenuOpen = document.getElementById("mobile-menu-open");
const mobileMenuClose = document.getElementById("mobile-menu-close");
const siteCopyright = document.getElementById('copyright-date');
const mobileMenuWithChildren = document.querySelectorAll('.mobile-menu-with-children');

mobileMenuOpen.addEventListener('click', e => {
  disableBodyScroll(mobileMenu);
});

mobileMenuClose.addEventListener('click', e => {
  enableBodyScroll(mobileMenu);
});

for (let i = 0; i < mobileMenuWithChildren.length; i++) {
  mobileMenuWithChildren[i].addEventListener('click', e => {
    enableBodyScroll(mobileMenu);
  });
}

var today = new Date();
var yyyy = today.getFullYear();

today = yyyy;
siteCopyright.innerText = today;

function init() {
  // A demo: add an element to the document, then announce it
  const alertNode = document.createElement("div");
  const mainNode = document.querySelector("main");

  alertNode.setAttribute("role", "status");
  alertNode.setAttribute("aria-live", "polite");
  mainNode.appendChild(alertNode);

  // Wait some arbitrary time, then populate it
  setTimeout(() => {
    const successNode = document.createElement("p");
    // Let's verify that Vite is injecting environment variables
    // @see https://vitejs.dev/guide/env-and-mode.html#env-variables
    if (import.meta.env.DEV === true) {
      successNode.innerText = "Vite is serving the script correctly!";
    }
    if (import.meta.env.PROD === true) {
      successNode.innerText =
        "";
    }
    alertNode.appendChild(successNode);
  }, 400);
}

init();

let doc = document.documentElement;
let w = window;

let prevScroll = w.scrollY || doc.scrollTop;
let curScroll;
let direction = 0;
let prevDirection = 0;

var checkScroll = function() {
  if (curScroll < 150) {
    header.classList.remove('is-sticky');
  }
  /*
  ** Find the direction of scroll
  ** 0 - initial, 1 - up, 2 - down
  */

  curScroll = w.scrollY || doc.scrollTop;
  if (curScroll > prevScroll) { 
    //scrolled up
    direction = 2;
  }
  else if (curScroll < prevScroll) { 
    //scrolled down
    direction = 1;
  }

  if (direction !== prevDirection) {
    toggleHeader(direction, curScroll);
  }

  prevScroll = curScroll;
};

var toggleHeader = function(direction, curScroll) {
  if (direction === 2 && curScroll > 50) {
    header.style.cssText = "transform: translateY(-" + headerBoxHeight + ");";
    prevDirection = direction;
  }
  else if (direction === 1) {
    header.classList.add('is-sticky');
    header.style.cssText = "transform: translateY(-1px)";
    prevDirection = direction;
  }
};

window.addEventListener('scroll', checkScroll);