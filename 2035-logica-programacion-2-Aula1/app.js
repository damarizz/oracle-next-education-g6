let numeroSecreto = generarNumeroSecreto();
console.log(numeroSecreto);

function asignarTextoElemento (elemento, texto) {
    let elementoHtml = document.querySelector(elemento); // permite acceder a c/u de los elementos
    elementoHtml.innerHTML = texto;
}

function intentoDeUsuario() {
    alert("Click desde el botón");
}

function generarNumeroSecreto () {
    return Math.floor(Math.random()*10) + 1;
}

asignarTextoElemento('h1', 'Juego del Número Secreto');
asignarTextoElemento('p', 'Ingresa un número del 1 al 10');
