// #region animation-homePage
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
// #endregion

// #region Navega_Entre_Telas
const loginCard = document.getElementById('loginCard');
const cadastroCard = document.getElementById('cadastroCard');
const solicitacaoCard = document.getElementById('solicitacaoCard');

const btnIrParaCadastro = document.getElementById('btnIrParaCadastro');
const btnIrParaSolicitacao = document.getElementById('btnIrParaSolicitacao');
const botoesVoltarLogin = document.querySelectorAll('.btnVoltarLogin');

const imagensDeFundo = {
    'loginCard': 'https://i.pinimg.com/originals/cd/ba/b5/cdbab594ae7780cbe2cc57cadfcd0555.png',
    'cadastroCard': '',
    'solicitacaoCard': 'https://i.pinimg.com/originals/f9/ca/f9/f9caf93cad63d9bf30546210a3c3f323.gif'
};

function alternarCard(cardParaMostrar) {
    loginCard.classList.add('card-oculto');
    cadastroCard.classList.add('card-oculto');
    solicitacaoCard.classList.add('card-oculto');

    cardParaMostrar.classList.remove('card-oculto');

    const idDoCard = cardParaMostrar.id;
    if (imagensDeFundo[idDoCard] && fundo) {
        fundo.style.backgroundImage =  'url("' + imagensDeFundo[idDoCard] + '")';
    }
}

btnIrParaCadastro.addEventListener('click', (e) => {
    e.preventDefault();
    alternarCard(cadastroCard);
});

btnIrParaSolicitacao.addEventListener('click', (e) => {
    e.preventDefault();
    alternarCard(solicitacaoCard);
});

botoesVoltarLogin.forEach(botao => {
    botao.addEventListener('click', (e) => {
        e.preventDefault();
        alternarCard(loginCard);
    });
});
// #endregion

// #region Password(PassPort) 
const usuariosPermitidos = [
    { username:"LSDN_ADM", senha:"097", nome:"LSDN"},
];

const formLogin = document.getElementById('formLogin');
formLogin.addEventListener('submit', function(event) {
    event.preventDefault();

    const usuarioDigitado = document.getElementById('username').value.trim();
    const senhaDigitada = document.getElementById('password').value;

    const usuarioEncontrado = usuariosPermitidos.find(u =>
        u.username.toLowerCase() === usuarioDigitado.toLowerCase() && u.senha === senhaDigitada
    );

    if (usuarioEncontrado) {
        alert(`Acesso Permitido! Bem-Vindo(a), ${usuarioEncontrado.nome}.`);
        window.location.href = '@ - Page_Started/index.html';
    } else {
        alert("Acesso Negado! Usuário ou senha incorretos, ou sua solicitação ainda não foi aprovada pelo dono.");
    }
});

const formCadastro = document.getElementById('formCadastro');
formCadastro.addEventListener('submit', function(event) {
    event.preventDefault();

    const novoUser = document.getElementById('newUsername').value.trim();
    const novoNome = document.getElementById('newName').value.trim();
    const novaSenha = document.getElementById('newPassword').value;

    const existe = usuariosPermitidos.some(u => u.username.toLowerCase() === novoUser.toLowerCase());
    if (existe) {
        alert("Este nome de usuário já está em uso!");
        return;
    }

    usuariosPermitidos.push({ username: novoUser, senha: novaSenha, nome: novoNome });

    alert("Cadastro realizado com sucesso! Agora você já pode fazer login");
    formCadastro.reset();
    alternarCard(loginCard);
});

const formSolicitacao = document.getElementById('formSolicitacao');
formSolicitacao.addEventListener('submit', function(event) {
    event.preventDefault();

    const nomeSolicitante = document.getElementById('solicitacaoNome').value.trim();
    const mensagemSolicitante = document.getElementById('solicitacaoMotivo').value.trim();

    const novaSolicitacao = {
        nome: nomeSolicitante,
        mensagem: mensagemSolicitante,
        data: new Date().toLocaleDateString('pt-BR'),
        status: "Pendente"
    };

    console.log("Enviando para o Admin:", novaSolicitacao);

    alert(`Solicitação enviada, ${nomeSolicitante}! O administrador irá analisar sua mensagem na página de controle.`)

    formSolicitacao.reset();
    alternarCard(loginCard);
});
// #endregion

// #region Copyright
document.addEventListener('DOMContentLoaded', () => {
    const btnInformacao = document.getElementById('btnInformacao');
    const cardCopyright = document.getElementById('cardCopyright');
    const btnFecharCopyright = document.querySelector('.fechar-copyright');     

    if (btnInformacao && cardCopyright && btnFecharCopyright) {
        btnInformacao.addEventListener('click', (e) => {
            e.preventDefault();
            cardCopyright.classList.add('mostrar');
    });

    btnFecharCopyright.addEventListener('click', () => {
        cardCopyright.classList.remove('mostrar');
    });

    Window.addEventListener('click', (event) => {
        if (event.target === cardCopyright) {
            cardCopyright.classList.remove('mostrar');
        }
    });
    }
});
// #endregion
