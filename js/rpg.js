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

    const toggleBtn = document.getElementById('toggleBtn');
    const mainMenu = document.getElementById('main-menu');

    toggleBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = mainMenu.classList.toggle('show');
        toggleBtn.textContent = isOpen ? '✖' : '☰';
        toggleBtn.classList.toggle('rotate', isOpen);
    });

    document.addEventListener('click', (e) => {
        if (mainMenu.classList.contains('show') && !mainMenu.contains(e.target) &&
            e.target !== toggleBtn) {
            mainMenu.classList.remove('show');
            toggleBtn.textContent = '☰'
            toggleBtn.classList.remove('rotate');
        };
    });

});