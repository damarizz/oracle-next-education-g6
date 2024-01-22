// Desafíos #2

// 1. Pregunta al usuario qué día de la semana es. Si la respuesta es "Sábado" o "Domingo",
// muestra "¡Buen fin de semana!". De lo contrario, muestra "¡Buena semana!".

let diaSemana = prompt("¿Qué día de la semana es?");
if (diaSemana == "Sábado" || diaSemana == "Domingo") {
    alert("¡Buen fin de semana!");
} else {
    alert("¡Buena semana!");
}

// 2. Verifica si un número ingresado por el usuario es positivo o negativo. Muestra una alerta informativa.

let valorUsuario = prompt("Ingresa un número: ");
if (valorUsuario < 0) {
    alert("El número ingresado es negativo.");
} else if (valorUsuario > 0) {
    alert("El número ingresado es positivo.");
} else {
    alert("El número ingresado es cero.");
}

// 3. Crea un sistema de puntuación para un juego. Si la puntuación es mayor o igual a 100, muestra
// "¡Felicidades, has ganado!". En caso contrario, muestra "Intenta nuevamente para ganar.".

let score = 150; // ejemplo
if (score >= 100) {
    console.log("¡Felicidades, has ganado!");
} else {
    console.log("Intenta nuevamente para ganar.");
}

// 4. Crea un mensaje que informe al usuario sobre el saldo de su cuenta,
// utilizando un template string para incluir el valor del saldo.

let saldo = 400; // ejemplo
alert(`El saldo de su cuenta es ${saldo}`);

// 5. Pide al usuario que ingrese su nombre mediante un prompt.
// Luego, muestra una alerta de bienvenida usando ese nombre.
let userName = prompt("Ingrese su nombre: ");
alert(`Bienvenidx, ${userName}`);
