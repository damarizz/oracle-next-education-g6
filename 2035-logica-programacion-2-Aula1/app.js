let numeroSecreto;
let intentos;
let listaNumerosGenerados = [];
let numMaximo = 10;

function asignarTextoElemento (elemento, texto) {
    let elementoHtml = document.querySelector(elemento); // permite acceder a c/u de los elementos
    elementoHtml.innerHTML = texto;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `¡Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}!`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        // el usuario no acertó
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El número secreto es menor');
        } else {
            asignarTextoElemento('p', 'El número secreto es mayor')
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto () {
    let numGenerado = Math.floor(Math.random()*numMaximo) + 1;
    console.log(numGenerado);
    // si ya sorteamos todos los números
    if (listaNumerosGenerados.length == numMaximo) {
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles')
        // faltaría bloquear el botón de intentar y que sea nuevo juego y limpias la lista
    } else {
        if (listaNumerosGenerados.includes(numGenerado)) { // returns true or false
            return generarNumeroSecreto();
        } else {
            listaNumerosGenerados.push(numGenerado);
            console.log(listaNumerosGenerados);
            return numGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del Número Secreto');
    asignarTextoElemento('p', `Ingresa un número del 1 al ${numMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    // limpiar la caja
    limpiarCaja();
    // indicar msj de intervalo
    // generar aleatorio
    // inicializar el número de intentos
    condicionesIniciales();
    // deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();