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

// #region botão afundado
const btnAbrirPopup = document.getElementById('btn-abrir-popup');
const btnFecharPopup = document.getElementById('btn-fechar-popup');
const fundoPopup = document.getElementById('fundo-popup');
const formularioSenha = document.getElementById('formulario-senha');
const campoSenha =document.getElementById('campo-senha');
const mensagemErro = document.getElementById('mensagem-erro');

function abrirPopup(event) {
    event.preventDefault();
    fundoPopup.classList.add('mostrar');
    campoSenha.focus();
}

function fecharPopup() {
    fundoPopup.classList.remove('mostrar');
    campoSenha.value = "";
    mensagemErro.textContent = "";
}

async function validarSenha(event) {
    event.preventDefault();

    const senhaDigitada = campoSenha.value.trim();
    mensagemErro.textContent = "verificando...";

    // ============================================================================================
    // =============================== MÉTODO COM SENHA (Simples) =================================
    // ============================================================================================

    const SENHA_TEMPORARIA_GITHUB = "123456"

    if (senhaDigitada === SENHA_TEMPORARIA_GITHUB) {
        mensagemErro.textContent = "";

        window.location.href = "../Others_Pages/Roxo/index.html";
    } else {
        mensagemErro.textContent = "Senha incorreta! Tente novamente.";
        campoSenha.value = "";
        campoSenha.focus();
    }
    // ============================================================================================

    // ============================================================================================
    // ================================ MÉTODO COM SENHA (online) =================================
    // ============================================================================================

    // try {
    //     const resposta = await fetch('http://localhost:3000/api/verificar-senha', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({ senhaDigitada: senhaDigitada })
    //     });

    //     const dados = await resposta.json();

    //     if (dados.valido) {
    //         mensagemErro.textContent = "";
    //         window.location.href = dados.destino;
    //     } else {
    //         mensagemErro.textContent = dados.mensagem;
    //         campoSenha.value = "";
    //         campoSenha.focus();
    //     }
    // } catch (error) {
    //     mensagemErro.textContent = "Erro ao conectar com o servidor de segurança";
    //     console.error(error)
    // }

    // ============================================================================================
}

btnAbrirPopup.addEventListener('click', abrirPopup);
btnFecharPopup.addEventListener('click', fecharPopup);
formularioSenha.addEventListener('submit', validarSenha);

fundoPopup.addEventListener('click', function(event) {
    if(event.target === fundoPopup) {
        fecharPopup();
    }
});
// #endregion

// #region Theme-Selector Dropdown
const dropdown = document.getElementById('themeDropdown');
const trigger = dropdown.querySelector('.dropdown-trigger');
const items = dropdown.querySelectorAll('.dropdown-item');

trigger.addEventListener('click', (e) => {
    e.stopPropagation ();
    dropdown.classList.toggle('open');
});

document.addEventListener('click', () => {
    dropdown.classList.remove('open')
});

items.forEach(item => {
    item.addEventListener('click', () => {
        items.forEach(i => i.classList.remove('active'));
        item.classList.add('active');

        const theme = item.getAttribute('data-theme');
        const themeName = item.getAttribute('data-name');

        dropdown.querySelector('.active-name').textContent = `// TEMA: ${themeName}`;

        const activePreview = dropdown.querySelector('.active-preview');
        activePreview.className = `active-preview preview-${theme}`;

        document.body.className = '';
        if (theme !== 'geral') {
            document.body.classList.add(`theme-${theme}`);
        }
    });
});

// #endregion
