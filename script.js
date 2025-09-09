document.querySelectorAll('.dot').forEach(dot => {
    dot.addEventListener('click', function() {
        document.querySelectorAll('.dot').forEach(d => d.classList.remove('dot-active'));
        this.classList.add('dot-active');
    });
});

document.querySelectorAll('.dot0').forEach((dot, index) => {
    dot.addEventListener('click', () => {
        window.location.href = `index.html`;
    });
});

document.querySelectorAll('.dot1').forEach((dot, index) => {
    dot.addEventListener('click', () => {
        window.location.href = `portafolio_web1.html`;
    });
});

document.querySelectorAll('.dot2').forEach((dot, index) => {
    dot.addEventListener('click', () => {
        window.location.href = `portafolio_web2.html`;
    });
});

document.querySelectorAll('.dot3').forEach((dot, index) => {
    dot.addEventListener('click', () => {
        window.location.href = `portafolio_web3.html`;
    });
});

const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-bar');

toggle.addEventListener('click', () => {
  toggle.classList.toggle('active'); 
  nav.classList.toggle('open');     
});
