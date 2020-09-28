const page__preload = document.querySelector('.page__preload');

window.addEventListener(
  'load',
  () => {
    page__preload.classList.remove('page__preload');
  },
  false
);
