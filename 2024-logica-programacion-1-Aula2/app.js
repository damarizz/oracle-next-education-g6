alert('Bienvenido al juego del número secreto');
let numeroSecreto = 6;
let numeroUsuario = 0;
let attempts = 1;

while (numeroUsuario != numeroSecreto) {
    numeroUsuario = prompt("¿Me indicas un número por favor? ");
    console.log("Valor del intento: ", numeroUsuario);
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
        if (attempts == 1) {
        alert(`¡Acertaste, el número es ${numeroSecreto}! Lo lograste en el primer intento.`);
        } else {
            alert(`¡Acertaste, el número es ${numeroSecreto}! Lo lograste en el intento n° ${attempts}.`);
        }
    } else {
        if (numeroUsuario > numeroSecreto) {
            alert("El número secreto es menor.")
        } else {
            alert("El número secreto es mayor.")
        }
        attempts++;
        // console.log('Valor del número secreto:', numeroSecreto);
        // alert("Lo siento, no acertaste el número. El número secreto era " + numeroSecreto);
    }
}