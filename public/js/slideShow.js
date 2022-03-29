const mainSlide = document.querySelector('.main-slide-image');
const subSlide = document.querySelector('.sub-slide-image');

subSlide.addEventListener('click', () => {
  mainSlide.classList.add('main-slide-hidden');
  mainSlide.classList.add('sub-slide-image');
});
