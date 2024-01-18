alert('Bienvenido al juego del número secreto');

let numeroUsuario = prompt("¿Me indicas un número por favor? ");
console.log("Valor del intento: ", numeroUsuario);

let numeroSecreto = 6;
console.log('Resultado de la comparación:', numeroUsuario == numeroSecreto);
/*
= -> asignación/atribución
== -> comparación
=== ->
*/

console.log(numeroUsuario);

// template strings (``): para concatenar variables (y código js) usando ${}
// cuando usas "" la , no sirve para añadir variables, acá debes usar +
// en '' si funcionan la ,

if (numeroUsuario == numeroSecreto) {
    alert(`¡Acertaste, el número es ${numeroSecreto}!`);
} else {
    console.log('Valor del número secreto:', numeroSecreto);
    alert("Lo siento, no acertaste el número. El número secreto era " + numeroSecreto);
}
