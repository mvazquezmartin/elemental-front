import DOMmanager from '../DOMabstraction/DOMmanager.js';

const DOM = new DOMmanager;
const mobileMenu = DOM.getElement('#mobile-menu');
const navMenu = DOM.getElement('#nav-menu');

function toggleMobileMenu() {
  mobileMenu.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });
}

export default toggleMobileMenu;
