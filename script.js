document.addEventListener('DOMContentLoaded', function() {
    // Fixed Header Functionality
    const header = document.querySelector('header');
    let lastScroll = 0;

    if (header) {
        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;
            
            if (currentScroll > 100) {
                header.classList.add('fixed', 'top-0', 'left-0', 'right-0', 'shadow-md', 'z-50');
                header.style.transition = 'all 0.3s ease';
            } else {
                header.classList.remove('fixed', 'top-0', 'left-0', 'right-0', 'shadow-md', 'z-50');
            }
            lastScroll = currentScroll;
        });
    }

    // Image Slider Functionality with Visual Search
    const slider = document.querySelector('.relative.w-full.max-w-\\[988px\\]');
    const prevBtn = document.getElementById('prev');
    const nextBtn = document.getElementById('next');
    const radioButtons = document.querySelectorAll('input[name="slide"]');
    let currentSlide = 0;

    if (slider && prevBtn && nextBtn) {
        const slides = slider.querySelectorAll('img');

        function showSlide(index) {
            slides.forEach((slide, i) => {
                slide.style.opacity = i === index ? '1' : '0';
                if (radioButtons[i]) {
                    radioButtons[i].checked = i === index;
                }
            });
        }

        function nextSlide() {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        }

        function prevSlide() {
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;
            showSlide(currentSlide);
        }

        prevBtn.addEventListener('click', prevSlide);
        nextBtn.addEventListener('click', nextSlide);
        
        radioButtons.forEach((radio, index) => {
            radio.addEventListener('change', () => {
                currentSlide = index;
                showSlide(index);
            });
        });

        setInterval(nextSlide, 3000);

        // Add Visual Search to Slider
        slides.forEach(slide => {
            const visualSearchDiv = document.createElement('div');
            visualSearchDiv.className = 'visual-search absolute top-2 right-2 opacity-0 transition-opacity duration-300';
            visualSearchDiv.innerHTML = `
                <div class="visual-search-btn bg-white p-1 rounded-full shadow-md cursor-pointer hover:bg-gray-100">
                    <img src="./assets/visual-search.svg" alt="Search" class="w-5 h-5">
                </div>
                <div class="save-btn bg-white p-1 rounded-full shadow-md cursor-pointer hover:bg-gray-100 mt-1 hidden">
                    <img src="./assets/save-copy.svg" alt="Save" class="w-5 h-5">
                </div>
                <div class="settings-btn bg-white p-1 rounded-full shadow-md cursor-pointer hover:bg-gray-100 mt-1 hidden">
                    <img src="./assets/horizontal-ellipsis.svg" alt="Settings" class="w-5 h-5">
                </div>
            `;
            
            slide.parentElement.style.position = 'relative';
            slide.parentElement.appendChild(visualSearchDiv);

            const visualSearchBtn = visualSearchDiv.querySelector('.visual-search-btn');
            const saveBtn = visualSearchDiv.querySelector('.save-btn');
            const settingsBtn = visualSearchDiv.querySelector('.settings-btn');

            slide.parentElement.addEventListener('mouseenter', () => {
                visualSearchDiv.classList.remove('opacity-0');
                visualSearchDiv.classList.add('opacity-100');
            });

            slide.parentElement.addEventListener('mouseleave', () => {
                visualSearchDiv.classList.remove('opacity-100');
                visualSearchDiv.classList.add('opacity-0');
                saveBtn.classList.add('hidden');
                settingsBtn.classList.add('hidden');
            });

            visualSearchBtn.addEventListener('mouseenter', () => {
                saveBtn.classList.remove('hidden');
                settingsBtn.classList.remove('hidden');
            });

            visualSearchDiv.addEventListener('mouseleave', () => {
                saveBtn.classList.add('hidden');
                settingsBtn.classList.add('hidden');
            });
        });
    }

    // Visual Search Icon Functionality for Product Cards
    const productCards = document.querySelectorAll('.f-s-item, .bg-white.border.p-2');
    
    productCards.forEach(card => {
        const imageContainer = card.querySelector('img');
        if (imageContainer) {
            const visualSearchDiv = document.createElement('div');
            visualSearchDiv.className = 'visual-search absolute top-2 right-2 opacity-0 transition-opacity duration-300';
            visualSearchDiv.innerHTML = `
                <div class="visual-search-btn bg-white p-1 rounded-full shadow-md cursor-pointer hover:bg-gray-100">
                    <img src="./assets/visual-search.svg" alt="Search" class="w-5 h-5">
                </div>
                <div class="save-btn bg-white p-1 rounded-full shadow-md cursor-pointer hover:bg-gray-100 mt-1 hidden">
                    <img src="./assets/save-copy.svg" alt="Save" class="w-5 h-5">
                </div>
                <div class="settings-btn bg-white p-1 rounded-full shadow-md cursor-pointer hover:bg-gray-100 mt-1 hidden">
                    <img src="./assets/horizontal-ellipsis.svg" alt="Settings" class="w-5 h-5">
                </div>
            `;
            
            imageContainer.parentElement.style.position = 'relative';
            imageContainer.parentElement.appendChild(visualSearchDiv);

            const visualSearchBtn = visualSearchDiv.querySelector('.visual-search-btn');
            const saveBtn = visualSearchDiv.querySelector('.save-btn');
            const settingsBtn = visualSearchDiv.querySelector('.settings-btn');

            card.addEventListener('mouseenter', () => {
                visualSearchDiv.classList.remove('opacity-0');
                visualSearchDiv.classList.add('opacity-100');
            });

            card.addEventListener('mouseleave', () => {
                visualSearchDiv.classList.remove('opacity-100');
                visualSearchDiv.classList.add('opacity-0');
                saveBtn.classList.add('hidden');
                settingsBtn.classList.add('hidden');
            });

            visualSearchBtn.addEventListener('mouseenter', () => {
                saveBtn.classList.remove('hidden');
                settingsBtn.classList.remove('hidden');
            });

            visualSearchDiv.addEventListener('mouseleave', () => {
                saveBtn.classList.add('hidden');
                settingsBtn.classList.add('hidden');
            });
        }
    });

    // Enhanced Side Navigation Functionality
    document.addEventListener('DOMContentLoaded', () => {
        const navItems = document.querySelectorAll('.nav-item');
        const buttons = document.querySelectorAll('.nav-btn');

        buttons.forEach(button => {
            const label = button.querySelector('.nav-label');
            const sectionId = label.textContent.toLowerCase().replace(/\s+/g, '-');
            
            // Create name display box
            const nameBox = document.createElement('div');
            nameBox.className = 'nav-name-box absolute left-full ml-2 bg-orange-500 text-white px-2 py-1 rounded opacity-0 transition-opacity duration-200 whitespace-nowrap';
            nameBox.textContent = label.textContent;
            button.style.position = 'relative';
            button.appendChild(nameBox);

            // Click functionality
            button.addEventListener('click', () => {
                const section = document.getElementById(sectionId);
                if (section) {
                    section.scrollIntoView({ behavior: 'smooth' });
                }
            });

            // Hover functionality
            button.addEventListener('mouseenter', () => {
                button.classList.add('bg-orange-500', 'text-white');
                label.classList.add('text-white');
                nameBox.classList.remove('opacity-0');
                nameBox.classList.add('opacity-100');
            });

            button.addEventListener('mouseleave', () => {
                button.classList.remove('bg-orange-500', 'text-white');
                label.classList.remove('text-white');
                nameBox.classList.remove('opacity-100');
                nameBox.classList.add('opacity-0');
            });
        });

        // Scroll functionality
        window.addEventListener('scroll', () => {
            const scrollPosition = window.scrollY + window.innerHeight / 2;

            navItems.forEach(item => {
                const button = item.querySelector('.nav-btn');
                const label = item.querySelector('.nav-label');
                const sectionId = label.textContent.toLowerCase().replace(/\s+/g, '-');
                const section = document.getElementById(sectionId);

                if (section) {
                    const sectionTop = section.offsetTop;
                    const sectionBottom = sectionTop + section.offsetHeight;

                    if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
                        button.classList.add('active', 'bg-orange-500', 'text-white');
                        label.classList.add('opacity-100', 'text-white');
                    } else if (!button.matches(':hover')) {
                        button.classList.remove('active', 'bg-orange-500', 'text-white');
                        label.classList.remove('opacity-100', 'text-white');
                    }
                }
            });
        });
    });

    // Load More Functionality
    const loadMoreBtn = document.querySelector('.block.mx-auto.mt-6');
    let visibleProducts = 12;
    
    const allProducts = document.querySelectorAll('.just-for-you .bg-white.border.p-2');
    if (allProducts.length > 0) {
        allProducts.forEach((product, index) => {
            if (index >= visibleProducts) {
                product.style.display = 'none';
            }
        });

        if (loadMoreBtn) {
            loadMoreBtn.addEventListener('click', () => {
                visibleProducts += 12;
                allProducts.forEach((product, index) => {
                    if (index < visibleProducts) {
                        product.style.display = 'block';
                    }
                });
                
                if (visibleProducts >= allProducts.length) {
                    loadMoreBtn.style.display = 'none';
                }
            });
        }
    }
});   