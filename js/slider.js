const slider = document.querySelector('.slider');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const slides = Array.from(slider.querySelectorAll('img'));
const slideCount = slides.length;
let slideIndex = 0;

prevButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);

function showPreviousSlide() {
  slideIndex = (slideIndex - 1 + slideCount) % slideCount;
  updateSlider();
}

function showNextSlide() {
  slideIndex = (slideIndex + 1) % slideCount;
  updateSlider();
}

function updateSlider() {
  slides.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

function currentSlide(n) {
  slideIndex = n;
  updateSlider();
}

function autoSlide() {
  showNextSlide();
}

let interval = setInterval(autoSlide, 5000);

slider.addEventListener('mouseenter', () => {
  clearInterval(interval);
});

slider.addEventListener('mouseleave', () => {
  interval = setInterval(autoSlide, 5000);
});

updateSlider();