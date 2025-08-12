document.querySelectorAll('.dot').forEach(dot => {
    dot.addEventListener('click', function() {
        document.querySelectorAll('.dot').forEach(d => d.classList.remove('dot-active'));
        this.classList.add('dot-active');
    });
});