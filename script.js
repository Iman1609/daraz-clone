document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded and parsed');

    // Fixed Header Functionality
    const header = document.querySelector('header');
    let lastScroll = 0;

    if (header) {
        console.log('Header found');
        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;
            if (currentScroll > 100) {
                header.classList.add('shadow-md');
                header.style.transition = 'all 0.3s ease';
            } else {
                header.classList.remove('shadow-md');
            }
            lastScroll = currentScroll;
        });
    } else {
        console.error('Header not found');
    }

    // Image Slider Functionality with Visual Search
    const slider = document.querySelector('.relative.w-full.max-w-\\[988px\\].overflow-hidden');
    const prevBtn = document.getElementById('prev');
    const nextBtn = document.getElementById('next');
    const radioButtons = document.querySelectorAll('input[name="slide"]');
    let currentSlide = 0;

    if (slider && prevBtn && nextBtn) {
        console.log('Slider and buttons found');
        const slides = slider.querySelectorAll('img');

        function showSlide(index) {
            slides.forEach((slide, i) => {
                slide.classList.toggle('opacity-100', i === index);
                slide.classList.toggle('opacity-0', i !== index);
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

        prevBtn.addEventListener('click', () => {
            console.log('Previous button clicked');
            prevSlide();
        });
        nextBtn.addEventListener('click', () => {
            console.log('Next button clicked');
            nextSlide();
        });

        radioButtons.forEach((radio, index) => {
            radio.addEventListener('change', () => {
                console.log(`Radio button ${index} changed`);
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
    } else {
        console.error('Slider or buttons not found');
    }

    // Visual Search Icon Functionality for Product Cards
    const productCards = document.querySelectorAll('.f-s-item, .bg-white.p-2');

    if (productCards.length > 0) {
        console.log('Product cards found:', productCards.length);
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
                        <img src="./assets/save-copy.svg" alt="Settings" class="w-5 h-5">
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
    } else {
        console.error('No product cards found');
    }

    // Enhanced Side Navigation Functionality
    const navButtons = document.querySelectorAll('nav.fixed.bottom-4 button');

    if (navButtons.length > 0) {
        console.log('Nav buttons found:', navButtons.length);
        navButtons.forEach(button => {
            const span = button.querySelector('span');
            if (span) {
                const sectionId = span.textContent.toLowerCase().replace(/\s+/g, '-');

                button.addEventListener('click', () => {
                    console.log(`Nav button clicked: ${sectionId}`);
                    const section = document.querySelector(`#${sectionId}`) || (sectionId === 'top' ? document.body : null);
                    if (section) {
                        section.scrollIntoView({ behavior: 'smooth' });
                    } else {
                        console.warn(`Section #${sectionId} not found`);
                    }
                });

                button.addEventListener('mouseenter', () => {
                    button.classList.add('bg-[#F85606]', 'text-white');
                    span.classList.add('opacity-100');
                });

                button.addEventListener('mouseleave', () => {
                    if (!button.classList.contains('active')) {
                        button.classList.remove('bg-[#F85606]', 'text-white');
                    }
                    span.classList.remove('opacity-100');
                });
            } else {
                console.warn('Span not found in nav button');
            }
        });

        window.addEventListener('scroll', () => {
            const scrollPosition = window.scrollY + window.innerHeight / 2;

            navButtons.forEach(button => {
                const span = button.querySelector('span');
                if (span) {
                    const sectionId = span.textContent.toLowerCase().replace(/\s+/g, '-');
                    const section = document.querySelector(`#${sectionId}`) || (sectionId === 'top' ? document.body : null);

                    if (section) {
                        const sectionTop = section.offsetTop;
                        const sectionBottom = sectionTop + section.offsetHeight;

                        if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
                            button.classList.add('active', 'bg-[#F85606]', 'text-white');
                            span.classList.add('opacity-100');
                        } else if (!button.matches(':hover')) {
                            button.classList.remove('active', 'bg-[#F85606]', 'text-white');
                            span.classList.remove('opacity-100');
                        }
                    }
                }
            });
        });
    } else {
        console.error('No nav buttons found');
    }

    // Load More Functionality for "Just For You" Section
    const loadMoreBtn = document.querySelector('.block.mx-auto.mt-6');
    let visibleProducts = 12;
    const allProducts = document.querySelectorAll('.grid.grid-cols-6 > div.bg-white.p-2');

    if (allProducts.length > 0) {
        console.log('Products found:', allProducts.length);
        allProducts.forEach((product, index) => {
            if (index >= visibleProducts) {
                product.classList.add('hidden');
            }
        });

        if (loadMoreBtn) {
            console.log('Load more button found');
            loadMoreBtn.addEventListener('click', () => {
                console.log('Load more clicked');
                visibleProducts += 12;
                allProducts.forEach((product, index) => {
                    if (index < visibleProducts) {
                        product.classList.remove('hidden');
                    }
                });

                if (visibleProducts >= allProducts.length) {
                    loadMoreBtn.classList.add('hidden');
                }
            });
        } else {
            console.error('Load more button not found');
        }
    } else {
        console.error('No products found for load more');
    }
});