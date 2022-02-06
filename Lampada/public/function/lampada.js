const lampadaLigada = document.getElementById ('lampadaOn');
const lampadaDesligada = document.getElementById ('lampadaOff');
const lamp = document.getElementById ('lamp');

function turnOn () {
    lamp.src = "./img/ligada.jpg"
}

function turnOff () {
    lamp.src = "./img/desligada.jpg"
}

function lampQuebrada () {
    lamp.src = "./img/quebrada.jpg"
}

lampadaLigada.addEventListener ('click', turnOn);
lampadaDesligada.addEventListener ('click', turnOff);
lamp.addEventListener ('mouseover', turnOn);
lamp.addEventListener ('mouseleave', turnOff);
lamp.addEventListener ('dblclick', lampQuebrada);