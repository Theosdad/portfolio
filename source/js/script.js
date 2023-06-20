const burgerButton = document.querySelector('.header__button');
const burgerMenu = document.querySelector('.nav-list');

burgerButton.addEventListener('click', () => {
  burgerMenu.classList.toggle('active');
  burgerButton.classList.toggle('active');
});
