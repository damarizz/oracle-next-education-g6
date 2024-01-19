/* Desafío #4 */

// 1. Crea un contador que comience en 1 y vaya hasta 10 usando un bucle 'while'. Muestra cada número.

let contador = 1;
while (10 >= contador) {
    alert(contador);
    contador++;
}

// 2. Crea un contador que comience en 10 y vaya hasta 0 usando un bucle 'while'. Muestra cada número.

let contador2 = 10;
while (contador2 >= 0) {
    alert(contador2);
    contador2--;
}

// 3. Crea un programa de cuenta regresiva. Pide un número y cuenta desde 0 hasta ese número utilizando un bucle 'while' en la consola del navegador.

let number = prompt("Ingrese un número: ");
while (0 <= number) {
    console.log(number);
    number--;
}

// 4. Crea un programa de cuenta progresiva. Pide un número y cuenta desde 0 hasta ese número utilizando un bucle 'while' en la consola del navegador.
let number2 = prompt("Ingrese un número: ");
let cuentaprog = 0;
while (cuentareg <= number2) {
    console.log(cuentareg);
    cuentareg++;
}
