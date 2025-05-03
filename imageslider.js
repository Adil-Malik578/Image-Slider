const slides = document.querySelector('.slides');
    const images = document.querySelectorAll('.slides img');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    let currentIndex = 0;

    function updateSlider() {
      const slideWidth = images[0].clientWidth;
      slides.style.transform = `translateX(${-currentIndex * slideWidth}px)`;
    }

    nextBtn.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % images.length;
      updateSlider();
    });

    prevBtn.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      updateSlider();
    });

    window.addEventListener('resize', updateSlider);