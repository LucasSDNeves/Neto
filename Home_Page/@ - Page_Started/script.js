
// #region Popup(Hidden).
// (const) Cria uma constante.
const btnAbrirPopup = document.getElementById('btn-abrir-popup');
    //(document) É a página que está em execução.
    //(getElementBtId) Procura na página pelo (id) colocado nos parênteses.

// (const) Cria uma constante.
const btnFecharPopup = document.getElementById('btn-fechar-popup');
    //(document) É a página que está em execução.
    //(getElementBtId) Procura na página pelo (id) colocado nos parênteses.

// (const) Cria uma constante.
const fundoPopup = document.getElementById('fundo-popup');
    //(document) É a página que está em execução.
    //(getElementBtId) Procura na página pelo (id) colocado nos parênteses.

// (const) Cria uma constante.
const formularioSenha = document.getElementById('formulario-senha');
    //(document) É a página que está em execução.
    //(getElementBtId) Procura na página pelo (id) colocado nos parênteses.

// (const) Cria uma constante.
const campoSenha = document.getElementById('campo-senha');
    //(document) É a página que está em execução.
    //(getElementBtId) Procura na página pelo (id) colocado nos parênteses.

// (const) Cria uma constante.
const mensagemErro = document.getElementById('mensagem-erro');
    //(document) É a página que está em execução.
    //(getElementBtId) Procura na página pelo (id) colocado nos parênteses.

// (const) Cria uma constante.
const SENHA_CORRETA = "KethFagundes";

// (const) Cria uma constante.
const PAGINA_DESTINO = "@ - Others_Page's/Roxo/index.html";

// Cria uma função.
function abrirPopup(event) {
        //(!) (event) Recebe a informação do clique.
        //(!) fundoPopup é uma variável.

    //(preventDefault) Cancela a ação que aconteceria ao acontecer o clique.
    event.preventDefault();
        //(!) (event) É a informação do clique.

    //(classList.add) Adiciona o ('mostrar') a lista dessa class.
    fundoPopup.classList.add('mostrar');
        //(!) fundoPopup é uma variável.

    //(focus) Coloca o usuário em conexão direta com o campo interativo que tiver.
    campoSenha.focus();
        //(!) campoSenha é uma variável.
}

// Cria uma função.
function fecharPopup() {

    //(classList.remove) Remove o ('mostrar') a lista dessa class.
    fundoPopup.classList.remove('mostrar');
        //(!) fundoPopup é uma variável.

    // (value) É o que vai ter de valor dentro da variável.
    campoSenha.value = "";
        //(!) (campoSenha) é uma variável.

    //(textContent) É o texto que terá na variável.
    mensagemErro.textContent = "";
        //(!) (mensagemErro) É uma variável.
}

// Cria uma função.
function validarSenha(event) {
    //(event) Recebe a informação do clique.

    //(preventDefault) Cancela a ação que aconteceria ao acontecer o clique.
    event.preventDefault();

    // (const) Cria uma constante.
    const senhaDigitada = campoSenha.value.trim();
        //Ele pega a variável(senhaDigitada) e compara com a variável(campoSenha).
            //(!) (trim()) Remove os espaços do início e do fim.
        //(!) As variáveis são senhaDigitada e campoSenha.

    //(if) É o "se".
    if (senhaDigitada === SENHA_CORRETA) {
        //(!) (===) É o comparativo, se for igual há.
            //(!) As variáveis são senhaDigitada e SENHA_CORRETA.

        // (textoContent) É o texto que irá aparecer.
        mensagemErro.textContent = "";
            //(!) A variável é mensagemErro.

        // (window.location.href) É o comando que faz abrir a tela, e ir para a pasta destino.
        window.location.href = PAGINA_DESTINO;
            // (!) A variável é PAGINA_DESTINO.

      //(else) Se o (if) der incorreto, segue com os comandos do (else).
    } else {

        // (textoContent) É o texto que irá aparecer.
        mensagemErro.textContent = "Senha incorreta! Tente novamente.";
            //(!) A variável é mensagemErro.

        // (value) É o que vai ter de valor dentro da variável.
        campoSenha.value = "";
            //(!) A variável é campoSenha.

        //(focus) Coloca o usuário em conexão direta com o campo interativo que tiver.
        campoSenha.focus();
            //(!) A variável é campoSenha.
    }
}

// Aqui ele pega a variável (btnAbrirPopup) que está conectada ao ID de outra parte do código, e se tiver uma interação, adicionar o ('click') a função correspondente. 
btnAbrirPopup.addEventListener('click', abrirPopup);
    //(!) (addEventListener) Adiciona a ação('click'), a respectiva função.
        //(!) Aqui a variável é (btnAbrirPopup).

// Aqui ele pega a variável (btnFecharPopup) que está conectada ao ID de outra parte do código, e se tiver uma interação, adicionar o ('click') a função correspondente. 
btnFecharPopup.addEventListener('click', fecharPopup);
    //(!) (addEventListener) Adiciona a ação('click'), a respectiva função.
        //(!) Aqui a variável é (btnFecharPopup).

// Aqui ele pega a variável (formularioSenha) que está conectada ao ID de outra parte do código, e se tiver uma interação, adicionar o ('submit') a função correspondente. 
formularioSenha.addEventListener('submit', validarSenha);
    //(!) (addEventListener) Adiciona a ação('submit'), a respectiva função.
        //(!) Aqui a variável é (formularioSenha).

// Aqui ele pega a variável (fundoPopup) que está conectada ao ID de outra parte do código, e se tiver uma interação, adicionar o ('click') a função correspondente. 
fundoPopup.addEventListener('click', function(event) {
    //(!) (addEventListener) Adiciona a ação('click'), a respectiva função.
    //(function(event)) É uma função temporária, criada rápidamente para carregar o 'click'.
        //(!) Aqui a variável é (formularioSenha).

    //(if) É o "se".
    if (event.target === fundoPopup) {
        //(!) (===) É o comparativo, se for igual há.
        //(target) É o elemento onde o usuário clicou.
            //(!) O (event) carrega as informações desse 'click', por exemplo: coordenadas.
                //(!) Se o 'click'(event), foi no elemento 'fundoPopup'(target).

        // Executa/chama a função.
        fecharPopup();
    }
});

// #endregion

// #region calendar
document.addEventListener('DOMContentLoaded', () => {
    const plannerCalendar = document.querySelector('[id="planner-calendar(all)"]');

    const btnMonth = document.getElementById('btn-month');
    const btnWeek = document.getElementById('btn-week');

    btnWeek.addEventListener('click', () => {
        plannerCalendar.classList.add('view-weekly');
        btnWeek.classList.add('active');
        btnMonth.classList.remove('active');
    });

    btnMonth.addEventListener('click', () => {
        plannerCalendar.classList.remove('view-weekly');
        btnMonth.classList.add('active');
        btnWeek.classList.remove('active');
    });
});
// #endregion