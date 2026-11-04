const footerTemplate_relative = `
    <footer class="footer-relative">
        <div class="footer-content">
            <span class="copyright">ALL RIGHTS RESERVED © COPYRIGHT. LucasSDNeves - Made In Brazil </span>
            <span class="version">// V0_1.5_60-BUILD</span>
        </div>
    </footer>
`;

const footerTemplate_fixed = `
    <footer class="footer-fixed">
        <div class="footer-content">
            <span class="copyright">ALL RIGHTS RESERVED © COPYRIGHT. LucasSDNeves - Made In Brazil </span>
            <span class="version">// V0_1.5_60-BUILD</span>
        </div>
    </footer>
`;

const scriptAtual = document.currentScript;
const urlDaPasta = scriptAtual ? scriptAtual.src.substring(0, scriptAtual.src.lastIndexOf('/') + 1):'';

async function verificarArquivosCssExternos() {
    const links = Array.from(document.querySelectorAll('link[rel="stylesheet"]'))
    .map(link => link.href)
    .filter(href => href && href.startsWith(window.location.origin));

    for (const url of links) {
        try {
            if (url.includes("footer.css")) {
                return true;
            }

            const resposta = await fetch (url);
            const textoDoCss = await resposta.text (url);

            if (
                textoDoCss.includes ('.footer-relative') ||
                textoDoCss.includes ('.footer-fixed') ||
                textoDoCss.includes ('footer.css') ||
                textoDoCss.includes ('Footer.css')
            ) {
                return true;
            }
        } catch (e) {
        
        }
    }
    return false;
}

async function rodarFooter() {
    if (!(await verificarArquivosCssExternos())) {
        const linkCss = document.createElement('link');
        linkCss.rel = 'stylesheet';
        linkCss.href = urlDaPasta + 'footer.css';

        document.head.appendChild(linkCss)
    }
}

const tipoFooter = scriptAtual ? scriptAtual.getAttribute('data-type') : 'relative';

const templateEscolhido = (tipoFooter === 'fixed') ? footerTemplate_fixed : footerTemplate_relative;

const containerModal = document.getElementById("containerFooterModal");

if (containerModal) {
    containerModal.innerHTML = templateEscolhido;
} else if (scriptAtual) {
    scriptAtual.insertAdjacentHTML("beforebegin", templateEscolhido);
} else {
    document.body.insertAdjacentHTML("beforeend", footerTemplate_relative);
}

rodarFooter();