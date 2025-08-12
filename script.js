document.querySelectorAll('.dot').forEach(dot => {
    dot.addEventListener('click', function() {
        document.querySelectorAll('.dot').forEach(d => d.classList.remove('dot-active'));
        this.classList.add('dot-active');
    });
});

document.querySelectorAll('.dot').forEach((dot, index) => {
    dot.addEventListener('click', () => {
        window.location.href = `portafolio_web${/*index + */1}.html`;
    });
});
