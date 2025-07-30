document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('header nav');
  const burger = nav.querySelector('.burger');

  burger.addEventListener('click', () => {
    nav.classList.toggle('open');
  });
});