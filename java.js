const mensagens = [
    "Você é a luz dos meus dias.",
    "Meu amor por você é infinito.",
    "Ao seu lado, meu coração encontra paz.",
    "Você é o melhor presente que a vida me deu.",
    "Seu sorriso ilumina o meu mundo.",
    "A cada dia, meu amor por você cresce mais.",
    "Nada é mais belo do que o nosso amor.",
    "Palavras podem me fugir para expressar o quanto eu te amo. Mas vou sempre tentar compensar através das minhas ações de amor e carinho. Você é a luz do sol que ilumina a minha vida e a minha estrada para o paraíso, nunca se esqueça disso, meu mais doce anjo.",
    "O amor tem o poder de transformar os mais duros dos corações. Ele tem a força de curar e confortar a alma mais atormentada e solitária. Eu sei disso, pois sinto tudo o que o seu amor fez por mim.",
    "Seus abraços apertados me derretem todo. O brilho nos seus olhos me cativam. Suas mordidas me fazem te desejar ainda mais. Eu te amo, para sempre!",
    "O conforto que sinto quando estamos em silêncio juntinhos me faz amar o pequeno universo que construímos para nós.",
    "Seria mais fácil você terminar de contar as estrelas do céu do que tentar quantificar o meu amor por você. Ele é infinito e nunca morrerá! Te amo, meu amor!",
    "Eu me apaixonei por você no momento que olhei para os seus olhos. Hoje, esse amor se transformou em respeito, confiança e paz. Obrigado por tudo, meu amor!",
    "Seu sorriso é o meu nascer do sol e seus beijos o meu pôr do sol.",
    "Amo você, mesmo sem você me amar. Amo seus rompantes em me devorar com os olhos e amo o nada que sempre vem depois disso. Amo seu nada, apenas porque o seu nada também é seu. Amo tanto, tanto, tanto, que te deixo em paz.",
    "Não foi em meu ouvido que você sussurrou pela primeira vez ‘eu te amo’, foi em meu coração. Também não foi em meus lábios que você me beijou quando nos conhecemos, foi na minha alma.",
    "Eu nunca acreditei em amor verdadeiro até o dia que te conheci. Hoje não sei mais o que é viver sem este sentimento. Ele me completa e me faz ser uma pessoa melhor todos os dias.",
    "Palavras são dispositivos fúteis para expressar o quanto eu te amo. O que sinto por você precisaria ser expresso pelas mais belas notas de um piano e cantada pelas vozes de um anjo celestial. Só assim, você chegaria perto de entender o quão lindo é o amor que sinto por você..",
    "Você pode tentar encontrar mil definições para amor no dicionário. Nada chegará perto do real sentimento que tenho por você..",
    
    "Seu doce sorriso é a inspiração para o começo de todos os meus dias. Sua voz suave é a razão para a paz na minha vida. Obrigado por transformar os meus dias em potes de alegria e felicidade. Te amo, meu anjo!",
    
    "Com você, descobri o verdadeiro significado da felicidade."
];

let paginaAtual = 0;

function exibirMensagem() {
    const mensagemDiv = document.getElementById('mensagem');
    mensagemDiv.textContent = mensagens[paginaAtual];
}

function proximaPagina() {
    if (paginaAtual < mensagens.length - 1) {
        paginaAtual++;
        exibirMensagem();
    }
}

function paginaAnterior() {
    if (paginaAtual > 0) {
        paginaAtual--;
        exibirMensagem();
    }
}

document.addEventListener('DOMContentLoaded', exibirMensagem);
function mostrarSecao(id) {
    // Esconde todas as seções
    var secoes = document.getElementsByClassName('container');
    for (var i = 0; i < secoes.length; i++) {
        secoes[i].style.display = 'none';
    }

    // Mostra a seção com o ID correspondente
    var secao = document.getElementById(id);
    if (secao) {
        secao.style.display = 'block';
    }
}
