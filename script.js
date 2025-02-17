
document.addEventListener('DOMContentLoaded', function () {
  // --- Slider Functionality ---
  const sliderContainer = document.querySelector('.max-w-4xl.mx-auto');
  const slidesContainer = sliderContainer.querySelector('.relative.h-80.overflow-hidden');
  const slides = slidesContainer.querySelectorAll('img');
  
  // Select all radio buttons for manual slide selection
  const radioButtons = document.querySelectorAll('input[name="slide"]');
  // Select the next and previous buttons by their IDs
  const prevButton = document.getElementById('prev');
  const nextButton = document.getElementById('next');
  
  let currentSlide = 0;
  const totalSlides = slides.length;
  let slideInterval;
  
  // Initialize the slider: show only the first slide
  slides.forEach((slide, index) => {
    slide.style.opacity = index === 0 ? '1' : '0';
  });

  if (radioButtons.length > 0) {
    radioButtons[0].checked = true;
  }
  
  // Function to show a specific slide by index
  function showSlide(index) {
    if (index >= totalSlides) {
      index = 0;
    } else if (index < 0) {
      index = totalSlides - 1;
    }
    slides.forEach((slide, i) => {
      slide.style.opacity = i === index ? '1' : '0';
    });
    radioButtons.forEach((radio, i) => {
      radio.checked = i === index;
    });
    currentSlide = index;
  }
  
  // Helper functions to move to the next or previous slide
  function nextSlide() {
    showSlide(currentSlide + 1);
  }
  
  function prevSlide() {
    showSlide(currentSlide - 1);
  }
  
  // Auto-slide: change slide every 3 seconds
  function startSlideShow() {
    slideInterval = setInterval(nextSlide, 3000);
  }
  
  // Stop the auto-slide interval
  function stopSlideShow() {
    clearInterval(slideInterval);
  }
  
  // Event listeners for Next and Previous buttons
  nextButton.addEventListener('click', function () {
    stopSlideShow();
    nextSlide();
    startSlideShow();
  });
  
  prevButton.addEventListener('click', function () {
    stopSlideShow();
    prevSlide();
    startSlideShow();
  });
  
  // Event listeners for radio buttons to jump to a slide
  radioButtons.forEach((radio, index) => {
    radio.addEventListener('change', function () {
      if (radio.checked) {
        stopSlideShow();
        showSlide(index);
        startSlideShow();
      }
    });
  });
  
  startSlideShow();
  
  // --- "Just For You" Load More Functionality ---
  const productGrid = document.querySelector('.just-for-you .grid');
  const loadMoreBtn = document.querySelector('.just-for-you button');
  
  // Convert NodeList of product cards into an array
  const productCards = productGrid.querySelectorAll('div');
  let visibleCount = 12;
  
  productCards.forEach((card, index) => {
    if (index >= visibleCount) {
      card.style.display = 'none';
    }
  });
  
  loadMoreBtn.addEventListener('click', function () {
    const totalProducts = productCards.length;
    let newVisibleCount = visibleCount + 12;
    for (let i = visibleCount; i < newVisibleCount && i < totalProducts; i++) {
      productCards[i].style.display = 'block';
    }
    visibleCount = newVisibleCount;
    if (visibleCount >= totalProducts) {
      loadMoreBtn.style.display = 'none';
    }
  });
});
