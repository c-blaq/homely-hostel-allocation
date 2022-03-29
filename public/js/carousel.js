let slidePosition = 0;
const slides = document.getElementsByClassName('carousel-items');
const totalSlides = slides.length;
const prevBtn = document.getElementById('arrow-left');
const nextBtn = document.getElementById('arrow-right');

console.log('prev', nextBtn);
prevBtn.addEventListener('click', () => {
  if (slidePosition === 0) {
    slidePosition = totalSlides - 1;
  } else {
    slidePosition--;
  }
  updateSlide();
});

nextBtn.addEventListener('click', () => {
  if (slidePosition === totalSlides - 1) {
    slidePosition = 0;
  } else {
    slidePosition++;
  }
  updateSlide();
});

function updateSlide() {
  for (let slide of slides) {
    slide.classList.remove('carousel-items-visible');
    slide.classList.add('carousel-items-hidden');
  }
  slides[slidePosition].classList.add('carousel-items-visible');
}
