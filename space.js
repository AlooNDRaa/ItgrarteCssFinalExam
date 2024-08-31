document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            if (i === index) {
                slide.setAttribute('aria-hidden', 'false');
                slide.style.display = 'block';
                slide.style.opacity = '1';
            } else {
                slide.setAttribute('aria-hidden', 'true');
                slide.style.display = 'none';
                slide.style.opacity = '0';
            }
        });
    }

    document.querySelector('.next').addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    });

    document.querySelector('.prev').addEventListener('click', function() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    });

    document.querySelector('.slider').addEventListener('keydown', function(e) {
        if (e.key === 'ArrowRight') {
            document.querySelector('.next').click();
        } else if (e.key === 'ArrowLeft') {
            document.querySelector('.prev').click();
        }
    });

    showSlide(currentIndex);
});


