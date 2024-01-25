// Desafíos
// 1. Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su altura en metros y peso en kilogramos,
// que se recibirán como parámetros.
function calcularIMC(altura, peso) {
    return peso / (altura * altura)
}
let imc = calcularIMC(1.60, 56);
console.log(imc);

// 2. Crea una función que calcule el valor del factorial de un número pasado como parámetro.
function calcularFactorial(numero) {
    if (numero === 1 || numero === 0) {
        return 1;
    } else {
        return numero * calcularFactorial(numero - 1);
    }
}
let numero = 6;
let factorial = calcularFactorial(numero);
console.log(`El factorial de ${numero} es igual a ${factorial}`);

// 3. Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor equivalente en reales
// (moneda brasileña, si deseas puedes hacerlo con el valor del dólar en tu país). Para esto, considera la cotización del dólar igual a R$4,80.
function conversorDolaresASoles(dolares) {
    return dolares * 3.77;
}
let dolares = 15;
let soles = conversorDolaresASoles(dolares);
console.log(`${dolares} ${dolares === 1 ? 'dólar equivale' : 'dólares equivalen'} a ${soles} ${soles === 1? 'sol' : 'soles'}`);

// 4. Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, utilizando la altura y la anchura que se
// proporcionarán como parámetros.
function rectanguloPerimetroArea(altura, anchura) {
    let area = altura * anchura;
    let perimetro = (2 * altura) + (2 * anchura);
    console.log(`El área de la sala rectangular es ${area} m^2 y su perímetro ${perimetro} m`);
}
rectanguloPerimetroArea(20, 80);

// 5. Crea una función que muestre en pantalla el área y el perímetro de una sala circular, utilizando su radio que se proporcionará
// como parámetro. Considera Pi = 3,14.
function circuloPerimetroArea(radio) {
    const PI = 3.14;
    let area = PI * radio * radio;
    let perimetro = 2 * PI * radio;
    console.log(`El área de la sala circular es ${area} m^2 y su perímetro ${perimetro} m`);
}
let radio = 6;
circuloPerimetroArea(radio);

// 6. Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.
function tablaMultiplicar(numero) {
    for (i=1; i <= 12; i++) {
        console.log(`${i} x ${numero} = ${numero * i}`);
    }
}
tablaMultiplicar(7);
