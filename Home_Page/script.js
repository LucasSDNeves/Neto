/* #region animation-homePage */
const fundo = document.querySelector('.lado-imagem');

let mouseX = 0;
let mouseY = 0;
let fundoX = 0;
let fundoY = 0;

const ehTouch = window.matchMedia("(pointer: coarse)").matches;

window.addEventListener('mousemove', (e) => {
    if (!ehTouch)
        mouseX = (e.clientX / window.innerWidth) - 0.5;
        mouseY = (e.clientY / window.innerHeight) - 0.5;
});

function animarParallax() {
    if(!ehTouch) {

        fundoX += ((mouseX * -25) -fundoX) * 0.06;
        fundoY += ((mouseY * -25) -fundoY) * 0.06;

        fundo.style.transform = `scale(1.1) translate(${fundoX}px, ${fundoY}px)`;
    }

    requestAnimationFrame(animarParallax);
}

animarParallax();
/* #endregion */