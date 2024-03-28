const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.getElementById('nav-menu');


function toggleMobileMenu() {
  mobileMenu.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });
}

export default toggleMobileMenu;
