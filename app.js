let listaDeNumerosSortiados = [];
let numeroMaximo = 10;
let numeroSecreto = gerarNumeroAleatrorio();
let tentativas = 1;

function exbirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2})
}
function exbirMensagemInicial() {
    exbirTextoNaTela('h1', 'Jogo do numero secreto');
    exbirTextoNaTela('p', 'escolha um numero entre 1 e 10');
}
exbirMensagemInicial()

console.log(numeroSecreto)

function verificarChute() {
    let chute = document.querySelector('input').value
    if (chute == numeroSecreto) {
        exbirTextoNaTela('h1', 'VOCE ACERTOU!!!');
        let palavraTentativaUma = tentativas > 1 ? 'uma' : tentativas
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
        let mensagemTentativas = `vc descobriu o numero secreto! com ${tentativas} ${palavraTentativa}`;
        exbirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
        
    } else {
        if (chute > numeroSecreto) {
            exbirTextoNaTela('p', 'o numero secreto é menor');
        } else {
            exbirTextoNaTela('p', 'o numero secreto é maior');
        }
        tentativas++;
        limparCampo()
    } 
}

function gerarNumeroAleatrorio() {
    let numeroEscolido = parseInt(Math.random() * numeroMaximo + 1 );
    let quantidadeDeElementosNaLista = listaDeNumerosSortiados.length;

    if (quantidadeDeElementosNaLista == numeroMaximo) {
        listaDeNumerosSortiados = []
    }

    if (listaDeNumerosSortiados.includes(numeroEscolido)) {
        return gerarNumeroAleatrorio()
    }
    else {
        listaDeNumerosSortiados.push(numeroEscolido)
        console.log(listaDeNumerosSortiados)
        return numeroEscolido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reniciarJogo() {
    numeroSecreto = gerarNumeroAleatrorio();
    limparCampo();
    tentativas = 1;
    console.log(numeroSecreto)
    exbirMensagemInicial()
    document.getElementById('reiniciar').setAttribute('disabled', true)
}

exbirMensagemInicial()