
// #region Mural Abre/Fecha
document.addEventListener("DOMContentLoaded", function () {
    const faixaMural = document.getElementById("faixa_mural");
    const muralPurple = document.getElementById("mural_purple");
    const setaMural = document.getElementById("seta_mural");

    const textoFaixa = document.getElementById("texto_faixa");

    muralPurple.classList.add("esconde-mural");

    faixaMural.addEventListener("click", function () {
        muralPurple.classList.toggle("esconde-mural");

        faixaMural.classList.toggle("mural-aberto");

        setaMural.classList.toggle("rodada");


        if (muralPurple.classList.contains("esconde-mural")) {
            textoFaixa.innerText = "Mural d'Anotações 🖊";
        } else {
            textoFaixa.innerText = "Written Notes 🖊";
        }
    });
});
// #endregion

// #region Mudar Estilo (estilo-folha)
document.addEventListener("DOMContentLoaded", function () {
    const textoNota = document.getElementById("textoNota_purple");
    const radioBranco = document.getElementById("branco");
    const radioCaderno = document.getElementById("caderno");

    function atualizarEstiloFolha() {
        if (radioCaderno.checked) {
            textoNota.classList.remove("estilo-branco");
            textoNota.classList.add("estilo-caderno");
        } else if (radioBranco.checked) {
            textoNota.classList.remove("estilo-caderno");
            textoNota.classList.add("estilo-branco");
        }
    }

    radioBranco.addEventListener("change", atualizarEstiloFolha);
    radioCaderno.addEventListener("change", atualizarEstiloFolha);
});
// #endregion

// #region contador-caracteres
document.addEventListener("DOMContentLoaded", function () {
    const textoNota = document.getElementById("textoNota_purple");
    const contCaracteres = document.getElementById("cont_caracteres");
    const contPalavras = document.getElementById("cont_palavras");
    const contLinhas = document.getElementById("cont_linhas");

    const contLeitura = document.getElementById("cont_leitura");

    textoNota.addEventListener("input", function() {
        const texto = textoNota.value;
        const textoTrim = texto.trim();

        contCaracteres.innerText = texto.length;

        const palavras = textoTrim.split(/\s+/);
        const totalPalavras = textoTrim === "" ? 0 : palavras.length;
        contPalavras.innerText = totalPalavras;

        const linhas = texto.split("\n");
        contLinhas.innerText = texto === "" ? 0 : linhas.length;

        const tempoMinutos = Math.ceil(totalPalavras / 200);
        contLeitura.innerText = totalPalavras === 0 ? "0m" : `${tempoMinutos}m`;
    });
});
// #endregion

// #region Texto-Capsula(titulo-data)
document.addEventListener("DOMContentLoaded", function () {
    const btnAdicionar = document.getElementById("btnAdicionar_purple_page");
    const tituloNota = document.getElementById("tituloNota_page_purple");
    const textoNota = document.getElementById("textoNota_purple");
    const muralPurple = document.getElementById("mural_purple");
    const radioCaderno = document.getElementById("caderno");

    const checkTitulo = document.getElementById("checkTitulo");
    const checkData = document.getElementById("checkData");

    btnAdicionar.addEventListener("click", function () {
        const titulo = tituloNota.value.trim();
        const texto = textoNota.value.trim();

        if (titulo === "" && texto === "") {
            alert("Por favor, digite um título ou uma nota antes de adicionar!");
            return;
        }

        const novoCard = document.createElement("div");
        novoCard.className = "card-nota";

        if (radioCaderno.checked) {
            novoCard.classList.add("estilo-caderno");
        } else {
            novoCard.classList.add("estilo-branco");
        }

        const agora = new Date();
        const dataFormatada = agora.toLocaleDateString("pt-BR");
        const horaFormatada = agora.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });

        let conteudoDoCard = "";

        if (checkTitulo.checked) {
            const tituloFinal = titulo === "" ? "Nota" : titulo;
            conteudoDoCard += `
                <div class="aba-edge">
                    <span class="nome-aba">${tituloFinal}</span>
                </div>
            `;
        }

        conteudoDoCard += `<button class="btn-deletar">&times;</button>`;

        if (checkData.checked) {
            conteudoDoCard += `
                <div class="capsula-data">
                    <span>${dataFormatada} - ${horaFormatada}</span>
                </div>
            `;
        }

        conteudoDoCard += `<p>${texto}</p>`;

        novoCard.innerHTML = conteudoDoCard;

        const btnDeletar = novoCard.querySelector(".btn-deletar");
        btnDeletar.addEventListener("click", function () {
            novoCard.remove();
        });

        muralPurple.appendChild(novoCard);

        tituloNota.value = "";
        textoNota.value = "";

        textoNota.dispatchEvent(new Event("input"));
    });
});

// #endregion

// #region pre
document.addEventListener("DOMContentLoaded" , function () {
    const campoText = document.getElementById('textoNota_purple');
    const campoTitulo = document.getElementById('tituloNota_page_purple');

    const radioCaderno = document.getElementById('caderno');
    const radioBranco = document.getElementById('branco');

    const checkTitulo = document.getElementById('checkTitulo');
    const checkData = document.getElementById('checkData');

    const miniPreviaFixa = document.getElementById('mini_previa_fixa');
    const btnFecharMiniPrevia = document.getElementById('btnFecharMiniPrevia');
    const cardPreviaEspelho = document.getElementById('card_previa_espelho');
    const checkAceiteRapido = document.getElementById('checkAceiteRapido');
    const statusAceiteTermo = document.getElementById('status_aceite_termo');

    const btnAbrirMiniPrevia = document.getElementById('btnAbrirMiniPrevia');
    const conteudoMiniPrevia = document.getElementById('conteudo_mini_previa');

    const telaSegurancaPrevia = document.getElementById('tela_seguranca_previa');
    const cardPreviaSegurancaAlvo = document.getElementById('card_previa_seguranca_alvo');
    const checkAceiteSeguranca = document.getElementById('checkAceiteSeguranca');
    const btnCancelarSeguranca = document.getElementById('btnCancelarSeguranca');
    const btnConfirmarSeguranca = document.getElementById('btnConfirmarSeguranca');

    const btnAdicionarMuralReal = document.getElementById('btnAdicionar_purple_page');

    const checkConfirmacaoPainel = document.getElementById('checkConfirmacaoPainel');

    let liberadoParaMural = false;
    let jaAbriuAutomatico = false;

    function resetarPainelEPrevia() {
        if (campoTitulo) campoTitulo.value = "";
        if (campoText) {
            campoText.value = "";
            campoText.className = "";
        }

        if (radioBranco) radioBranco.checked = false;
        if (radioCaderno) radioCaderno.checked = false;

        if (checkAceiteRapido) checkAceiteRapido.checked = false;
        if (checkAceiteSeguranca) checkAceiteSeguranca.checked = false;
        if (checkConfirmacaoPainel) checkConfirmacaoPainel.checked = false;

        if (statusAceiteTermo) {
            statusAceiteTermo.innerText = "❌ Visual ainda não aceito";
            statusAceiteTermo.className = "status-termo-inativo";
        }

        renderizarConteudoEspelho();
    }

    function renderizarConteudoEspelho () {
        if (!cardPreviaEspelho) return;

        const texto = campoText.value;
        const tituloDigitado = campoTitulo.value.trim();

        if (radioCaderno && radioCaderno.checked) {
            cardPreviaEspelho.className = "card-nota estilo-caderno";
        } else {
            cardPreviaEspelho.className = "card-nota estilo-branco";
        }

        const agora = new Date();
        const dataFormatada = agora.toLocaleDateString('pt-BR');
        const horaFormatada = agora.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });

        let htmlInterno = "";

        if (checkTitulo && checkTitulo.checked) {
            const tituloFinal = tituloDigitado === "" ? "Nota" : tituloDigitado;
            htmlInterno += `<div class="aba-edge"><span class="nome-aba" title="${tituloFinal}">${tituloFinal}</span></div>`;
        }

        if (checkData && checkData.checked) {
            htmlInterno += `<div class="capsula-data"><span>${dataFormatada} - ${horaFormatada}</span></div>`;
        }

        htmlInterno += `<p>${texto}</p>`;
        cardPreviaEspelho.innerHTML = htmlInterno;
    }

    function sincronizarEstadosDeAceite(eventoOrigem) {
        const estaMarcado = eventoOrigem.target.checked;

        checkAceiteRapido.checked = estaMarcado;
        checkAceiteSeguranca.checked = estaMarcado;
        if (checkConfirmacaoPainel) checkConfirmacaoPainel.checked = estaMarcado;

        if (estaMarcado) {
            statusAceiteTermo.innerText = "✅ visual aceito e confirmado"
            statusAceiteTermo.className = "status-termo-ativo";
        } else {
            statusAceiteTermo.innerText = "❌ visual ainda não aceito"
            statusAceiteTermo.className = "status-termo-inativo";
        }
    }

    if (campoText) campoText.addEventListener('input', renderizarConteudoEspelho);
    if (campoTitulo) campoTitulo.addEventListener('input', renderizarConteudoEspelho);
    if (checkTitulo) checkTitulo.addEventListener('change', renderizarConteudoEspelho);
    if (checkData) checkData.addEventListener('change', renderizarConteudoEspelho);
    if (radioCaderno) radioCaderno.addEventListener('change', renderizarConteudoEspelho);
    if (radioBranco) radioBranco.addEventListener('change', renderizarConteudoEspelho);

    if (checkAceiteRapido) checkAceiteRapido.addEventListener('change', sincronizarEstadosDeAceite);
    if (checkAceiteSeguranca) checkAceiteSeguranca.addEventListener('change', sincronizarEstadosDeAceite);
    if (checkConfirmacaoPainel) checkConfirmacaoPainel.addEventListener('change', sincronizarEstadosDeAceite);

    if (campoText) {
        campoText.addEventListener('focus', function () {
            if (btnAbrirMiniPrevia && btnAbrirMiniPrevia.style.display !== "none" && !jaAbriuAutomatico) {
                jaAbriuAutomatico = true;
                btnAbrirMiniPrevia.click();
            }
        });
    }

    if (btnFecharMiniPrevia) {
        btnFecharMiniPrevia.addEventListener('click', function () {
            conteudoMiniPrevia.style.display = "none";
            btnAbrirMiniPrevia.style.display = "block";
            miniPreviaFixa.style.pointerEvents = "auto";
        });
    }

    if (btnAbrirMiniPrevia) {
        btnAbrirMiniPrevia.addEventListener('click', function () {
            btnAbrirMiniPrevia.style.display = "none";
            conteudoMiniPrevia.style.display = "";
            miniPreviaFixa.style.pointerEvents = "auto";
        });
    }

    if (btnAdicionarMuralReal) {
        btnAdicionarMuralReal.addEventListener ('click', function (e) {
            const titulo = campoTitulo.value.trim();
            const texto = campoText.value.trim();

            if (titulo === "" && texto === "") {
                alert("Por favor, digite um título ou uma nota antes de continuar!");
                return;
            }

            if (liberadoParaMural) {
                liberadoParaMural = false;
                jaAbriuAutomatico = false;
                return;
            }

            const aceitoNoPainel = checkConfirmacaoPainel && checkConfirmacaoPainel.checked;
            const aceitoNaPrevia = checkAceiteRapido && checkAceiteRapido.checked;

            if (aceitoNoPainel || aceitoNaPrevia) {
                jaAbriuAutomatico = false;
                setTimeout (() => { resetarPainelEPrevia(); }, 50);
                return;
            }

            e.stopImmediatePropagation();

            if (cardPreviaSegurancaAlvo) cardPreviaSegurancaAlvo.appendChild(cardPreviaEspelho);
            if (telaSegurancaPrevia) telaSegurancaPrevia.classList.add('ativar-tela-bloqueio');
        }, true);
    }

    if (btnCancelarSeguranca) {
        btnCancelarSeguranca.addEventListener('click', function () {
            const baseTermos = document.querySelector('.base-mini-previa');
            if (conteudoMiniPrevia && cardPreviaEspelho && baseTermos) {
                conteudoMiniPrevia.insertBefore(cardPreviaEspelho, baseTermos);
            }
            telaSegurancaPrevia.classList.remove('ativar-tela-bloqueio');
        });
    }

    if (btnConfirmarSeguranca) {
        btnConfirmarSeguranca.addEventListener('click', function () {
            if (!checkAceiteSeguranca.checked) {
                alert("Você precisa marcar o checkbox confirmado o visual antes de enviar para o mural");
                return;
            }

            liberadoParaMural = true;
            jaAbriuAutomatico = false;

            const baseTermos = document.querySelector('.base-mini-previa');
            if (conteudoMiniPrevia && cardPreviaEspelho && baseTermos) {
                conteudoMiniPrevia.insertBefore(cardPreviaEspelho, baseTermos);
            }
            telaSegurancaPrevia.classList.remove('ativar-tela-bloqueio');

            setTimeout (() => {
                btnAdicionarMuralReal.click();
                resetarPainelEPrevia();
            }, 50);
        });
    }

    renderizarConteudoEspelho();
});

// #endregion

// #region (Cripto/Font)
document.addEventListener("DOMContentLoaded", function () {
    const seletorFonte = document.getElementById('seletorFonte');
    const checkCriptografiaNordica = document.getElementById('checkCriptografiaNordica');
    const cardPreviaEspelho = document.getElementById('card_previa_espelho');
    const btnAdicionarMuralReal = document.getElementById('btnAdicionar_purple_page');

    function aplicarEstiloPrevia() {
        if (!cardPreviaEspelho) return;

        cardPreviaEspelho.classList.remove('fonte-padrao', 'fonte-manual', "criptografado");

        if (seletorFonte) {
            cardPreviaEspelho.classList.add(seletorFonte.value);
        }

        if (checkCriptografiaNordica && checkCriptografiaNordica.checked) {
            cardPreviaEspelho.classList.add("criptografado");
        }
    }

    if (seletorFonte) seletorFonte.addEventListener('change', aplicarEstiloPrevia);
    if (checkCriptografiaNordica) checkCriptografiaNordica.addEventListener('change', aplicarEstiloPrevia);

    if (btnAdicionarMuralReal) {
        btnAdicionarMuralReal.addEventListener('click', function () {
            setTimeout (() => {
                const muralPurple = document.getElementById('mural_purple');
                if (!muralPurple) return;

                const cardsNoMural = muralPurple.getElementsByClassName('card-nota');
                const ultimoCard = cardsNoMural[cardsNoMural.length - 1];

                if (ultimoCard) {
                    if (seletorFonte) ultimoCard.classList.add(seletorFonte.value);
                    if (checkCriptografiaNordica && checkCriptografiaNordica.checked) {
                        ultimoCard.classList.add("criptografado");
                    }
                }
            }, 10);
        });
    }
});

// #endregion