/* Desafío #4 */

// 1. Crea un programa que utilice console.log para mostrar un mensaje de bienvenida.

console.log("¡Bienvenido a mi página!");

// 2. Crea una variable llamada "nombre" y asígnale tu nombre.
// Luego, utiliza console.log para mostrar el mensaje "¡Hola, [tu nombre]!" en la consola del navegador.

let nombre = "Damaris";
console.log(`Hola, ${nombre}!`);

// 3. Crea una variable llamada "nombre" y asígnale tu nombre. Luego, utiliza alert para mostrar el mensaje "¡Hola, [tu nombre]!".

alert(`Hola, ${nombre}!`);

// 4. Utiliza prompt y haz la siguiente pregunta: ¿Cuál es el lenguaje de programación que más te gusta?. Luego, almacena la respuesta en una variable y muestra la respuesta en la consola del navegador.

let lenguajeFav = prompt("¿Cuál es el lenguaje de programación que más te gusta?");
console.log(lenguajeFav);

// 5. Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores numéricos de tu elección. Luego, realiza la suma de estos dos valores y almacena el resultado en una tercera variable llamada "resultado". Utiliza console.log para mostrar el mensaje "La suma de [valor1] y [valor2] es igual a [resultado]." en la consola.

let valor1 = 10;
let valor2 = 13;
let resultado = valor1 + valor2;
console.log(`La suma de ${valor1} y ${valor2} es igual a ${resultado}.`);

// 6. Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores numéricos de tu elección. Luego, realiza la resta de estos dos valores y almacena el resultado en una tercera variable llamada "resultado". Utiliza console.log para mostrar el mensaje "La diferencia entre [valor1] y [valor2] es igual a [resultado]." en la consola.

let valor3 = 4;
let valor4 = 3;
let resultado2 = valor3 - valor4;
console.log(`La resta de ${valor3} y ${valor4} es igual a ${resultado}.`);


// 7. Pide al usuario que ingrese su edad con prompt. Con base en la edad ingresada, utiliza un if para verificar si la persona es mayor o menor de edad y muestra un mensaje apropiado en la consola.

let usuarioEdad = prompt("Ingrese su edad: ");
if (usuarioEdad >= 18) {
    alert("Eres mayor de edad.")
} else {
    alert("Eres menor de edad.")
}

// 8. Crea una variable "numero" y solicita un valor con prompt. Luego, verifica si es positivo, negativo o cero utilizando un if-else y muestra el mensaje correspondiente.

let numero = prompt("Ingrese un número: ");
if (numero > 0) {
    alert("El número ingresado es positivo.");
} else {
    if (numero < 0) {
        alert("El número ingresado es negativo.");
    } else {
        alert("El número ingresado es cero.");
    }
}

// 9. Utiliza un bucle while para mostrar los números del 1 al 10 en la consola.

let showedNum = 1;

while (showedNum < 11) {
    console.log(showedNum);
    showedNum++;
}

// 10. Crea una variable "nota" y asígnale un valor numérico. Utiliza un if-else para determinar si la nota es mayor o igual a 7 y muestra "Aprobado" o "Reprobado" en la consola.

let nota = 8;
if (nota  >= 7) {
    console.log("Aprobado.");
} else {
    console.log("Desaprobado.");
}

// 11. Utiliza Math.random para generar cualquier número aleatorio y muestra ese número en la consola.

let numAleatorio = Math.random();
console.log(numAleatorio);

// 12. Utiliza Math.random para generar un número entero entre 1 y 10 y muestra ese número en la consola.

let num1a10 = parseInt(Math.random()*10) + 1;
console.log(num1a10);

// 13. Utiliza Math.random para generar un número entero entre 1 y 1000 y muestra ese número en la consola.

let num1a1000 = parseInt(Math.random()*1000) + 1;
console.log(num1a1000);
