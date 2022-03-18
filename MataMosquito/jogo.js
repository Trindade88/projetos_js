var altura = 0
var largura = 0
var vidas = 1
var tempo = 20

var criaMosquitoTempo = 1500


// Selecioando o nivel do jogo
var nivel = window.location.search
nivel = nivel.replace('?', '')

if (nivel === 'doce_de_leite') {
    // 1500
    criaMosquitoTempo = 1500
} else if (nivel === 'o_de_sempre') {
    // 1000
    criaMosquitoTempo = 1050
} else if (nivel === 'chucknorris') {
    // 650
    criaMosquitoTempo = 800
}

// Ajustanto a Tela
function ajustaTelaJogo () {
    altura = window.innerHeight
    largura = window.innerWidth
    
    console.log (largura, altura)
}

ajustaTelaJogo()


// Tempo do jogo
var cronometro = setInterval(function() {
    
    tempo -= 1
    if (tempo < 0) {
        clearInterval(cronometro)
        clearInterval(criaMosquito)
        
        // Se sobreviver a partida
        window.location.href = 'vitoria.html'
    } else {
        document.getElementById('cronometro').innerHTML = tempo
    }
}, 1000)

// Posição aleatoria do mosquito
function posicaoAleatoria () {

    //Remover o mosquito anterior
    if(document.getElementById('mosquito')) {
    document.getElementById('mosquito').remove()
    
    //Controle de vidas e GAME OVER do jogo
    if(vidas > 3) {
        window.location.href = 'game_over.html'

    } else {
        document.getElementById('v' + vidas).src = "imagens/coracao_vazio.png"
        vidas++
    }

    }
    // Posiçções Aleatorias dos moquitos.
    var posicaoX = Math.floor (Math.random() * largura) - 90
    var posicaoY = Math.floor (Math.random() * altura) - 90

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    console.log (posicaoX, posicaoY)
    
    // Criação do elemento
    var mosquito = document.createElement('img')
    mosquito.src = 'imagens/mosquito.png'
    mosquito.className = tamanhoMosquito() + ' ' + ladoMosquito()
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'

    mosquito.onclick = function () {
        this.remove()
    }
    
    document.body.appendChild(mosquito)

    console.log(tamanhoMosquito())
    console.log(ladoMosquito())
}

// Tamanho dos mosquitos
function tamanhoMosquito() {
    var classe = Math.floor(Math.random() * 4)
    
    switch (classe) {
        case 0:
            return 'mosquito1'
        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3'
        case 3:
            return 'mosquito4'
    }
}

// Lado do Mosquito
function ladoMosquito () {
    var classe = Math.floor(Math.random() * 2)
    
    switch (classe) {
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'
    }
}