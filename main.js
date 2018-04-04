const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('header nav');
const navLinks = document.querySelectorAll('nav a');

hamburger.addEventListener('click', () => {
  if (nav.classList.contains('nav--show')) {
    nav.classList.remove('nav--show');
  }
  else {
    nav.classList.add('nav--show');
  }
  
});
