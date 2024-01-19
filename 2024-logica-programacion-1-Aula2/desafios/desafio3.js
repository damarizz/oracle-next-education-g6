/* Desafío #4 */

// 1. Crea un contador que comience en 1 y vaya hasta 10 usando un bucle 'while'. Muestra cada número.

let contador = 1;
while (10 >= contador) {
    console.log(contador);
    contador++;
}

// 2. Crea un contador que comience en 10 y vaya hasta 0 usando un bucle 'while'. Muestra cada número.

let contador2 = 10;
while (contador2 >= 0) {
    console.log(contador2);
    contador2--;
}

// 3. Crea un programa de cuenta regresiva. Pide un número y cuenta desde 0 hasta ese número utilizando un bucle 'while' en la consola del navegador.

let number = prompt("Ingrese un número: ");
while (number >= 0) {
    console.log(number);
    number--;
}

// 4. Crea un programa de cuenta progresiva. Pide un número y cuenta desde 0 hasta ese número utilizando un bucle 'while' en la consola del navegador.
let number2 = prompt("Ingrese un número: ");
let cuentaprog = 0;
while (cuentaprog <= number2) {
    console.log(cuentaprog);
    cuentaprog++;
}
