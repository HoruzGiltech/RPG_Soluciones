document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel');
    const images = document.querySelectorAll('.carousel img')

    images.forEach(img => {
        img.addEventListener('mouseenter', () => {
            carousel.style.animationPlayState = 'paused';
        });

        img.addEventListener('mouseleave', () => {
            carousel.style.animationPlayState = 'running';
        });
    });

});