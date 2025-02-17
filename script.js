document.addEventListener('DOMContentLoaded', function () {
  const sliderContainer = document.querySelector('.max-w-4xl.mx-auto');
  const slidesContainer = sliderContainer.querySelector('.relative');
  const slides = slidesContainer.querySelectorAll('img');
  

  const radioButtons = document.querySelectorAll('input[name="slide"]');
 
  const prevButton = document.getElementById('prev');
  const nextButton = document.getElementById('next');
  
  let currentSlide = 0;
  const totalSlides = slides.length;
  let slideInterval;
  
  
  slides.forEach((slide, index) => {
    slide.style.opacity = index === 0 ? '1' : '0';
  });

 
  if (radioButtons.length > 0) {
    radioButtons[0].checked = true;
  }
  
  
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
  

  function nextSlide() {
    showSlide(currentSlide + 1);
  }
  
  function prevSlide() {
    showSlide(currentSlide - 1);
  }
  
  
  function startSlideShow() {
    slideInterval = setInterval(nextSlide, 3000);  
  }
  

  function stopSlideShow() {
    clearInterval(slideInterval);
  }
  

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

  
  const productGrid = document.querySelector('.just-for-you .grid');
  const loadMoreBtn = document.querySelector('.just-for-you button');
  
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