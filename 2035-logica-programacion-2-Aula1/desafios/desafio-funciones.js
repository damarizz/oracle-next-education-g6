// Desafíos
// 1. Crear una función que muestre "¡Hola, mundo!" en la consola.
function holaMundo() {
    console.log('Hola Mundo!');
}
holaMundo();

// 2. Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.
function holaNombre(nombre) {
    console.log(`¡Hola, ${nombre}!`)
}
holaNombre("Anto");

// 3. Crear una función que reciba un número como parámetro y devuelva el doble de ese número.
function dobleNumero(numero) {
    return numero * 2;
}
let doble = dobleNumero(6);
console.log(doble);

// 4. Crear una función que reciba tres números como parámetros y devuelva su promedio.
function promedio(num1, num2, num3) {
    let promedio = (num1 + num2 + num3) / 3;
    return promedio;
}
let promTresNum = promedio(14, 16, 11);
console.log(promTresNum);

// 5. Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.
function calcularMayor(numero1, numero2) {
    if (numero1 > numero2) {
        return numero1;
    } else if (numero2 > numero1) {
        return numero2;
    } else {
        return("Los números son iguales");
    }
}
let numMayor = calcularMayor(8, 10);
console.log(numMayor);

// 6. Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo.
function alCuadrado(num) {
    return num * num;
}
let numCuadrado = alCuadrado(7);
console.log(numCuadrado);
