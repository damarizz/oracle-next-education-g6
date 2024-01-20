alert('Bienvenido al juego del número secreto');
let numeroSecreto = Math.floor(Math.random()*10) + 1;
let numeroUsuario = 0;
let attempts = 1;
let maxAttempts = 3;

while (numeroUsuario != numeroSecreto) {
    numeroUsuario = parseInt(prompt("¿Me indicas un número por favor? "));
    console.log("Valor del intento: ", numeroUsuario);
    console.log('Resultado de la comparación:', numeroUsuario == numeroSecreto);

    /*
    = -> asignación/atribución
    == -> comparación
    === -> comparación de valores y tipo de dato
    */

    console.log(numeroUsuario);

    // template strings (``): para concatenar variables (y código js) usando ${}
    // cuando usas "" la , no sirve para añadir variables, acá debes usar +
    // en '' si funcionan la ,

    if (numeroUsuario == numeroSecreto) {
        alert(`¡Acertaste, el número es ${numeroSecreto}! Lo lograste en ${attempts} ${ attempts == 1 ? 'vez' : 'veces'}`); // operador ternario
    } else {
        if (numeroUsuario > numeroSecreto) {
            alert("El número secreto es menor.")
        } else {
            alert("El número secreto es mayor.")
        }
        attempts++;
        // console.log('Valor del número secreto:', numeroSecreto);
        // alert("Lo siento, no acertaste el número. El número secreto era " + numeroSecreto);
        if (attempts > maxAttempts) {
            alert("Llegaste al número máximo de " + maxAttempts + " intentos.");
            break;
        }
    }
}