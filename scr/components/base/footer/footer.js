const footerTemplate_relative = `
    <footer class="footer-relative">
        <div class="footer-content">
            <span class="copyright">ALL RIGHTS RESERVED © COPYRIGHT. LucasSDNeves - Made In Brazil </span>
            <span class="version">// V0.0.1_BUILD</span>
        </div>
    </footer>
`;

const footerTemplate_fixed = `
    <footer class="footer-fixed">
        <div class="footer-content">
            <span class="copyright">ALL RIGHTS RESERVED © COPYRIGHT. LucasSDNeves - Made In Brazil </span>
            <span class="version">// V0.0.1_BUILD</span>
        </div>
    </footer>
`;

const scriptAtual = document.currentScript;
const urlDaPasta = scriptAtual ? scriptAtual.src.substring(0, scriptAtual.src.lastIndexOf('/') + 1):'';

const cssExistente = document.querySelector('link[href*="footer.css"]');

if (!cssExistente) {
    const linkCss = document.createElement('link');
    linkCss.rel = 'stylesheet';
    linkCss.href = urlDaPasta + 'footer.css';

    document.head.appendChild(linkCss);
}

const tipoFooter = scriptAtual ? scriptAtual.getAttribute('data-type') : 'relative';

const templateEscolhido = (tipoFooter === 'fixed') ? footerTemplate_fixed : footerTemplate_relative;

const containerModal = document.getElementById("containerFooterModal");

if (containerModal) {
    containerModal.innerHTML = templateEscolhido;
} else if (scriptAtual) {
    scriptAtual.insertAdjacentHTML("beforebegin", templateEscolhido);
} else {
    document.body.insertAdjacentHTML("beforrend", footerTemplate_relative);
}