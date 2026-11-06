// #region scroll-reveal
const observadorScroll = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        } else {
            entry.target.classList.remove('active');
        }
    });
}, {
    threshold: 0.15
});

const elementosParaAnimar = document.querySelectorAll('.scroll-reveal');
elementosParaAnimar.forEach((elemento) => {
    observadorScroll.observe(elemento);
});
// #endregion
