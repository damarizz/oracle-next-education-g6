// Desafíos
// 1. Crea una lista vacía llamada "listaGenerica".
let listaGenerica = [];

// 2. Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.
let lenguajesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];
console.log(lenguajesDeProgramacion);

// 3. Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.
lenguajesDeProgramacion.push('Java', 'Ruby', 'GoLang');
console.log(lenguajesDeProgramacion);

// 4. Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.
function mostrarLenguajeForma1() {
    lenguajesDeProgramacion.forEach(lenguaje => {
        console.log(lenguaje);
        return;
    });
}

mostrarLenguajeForma1();

function mostrarLenguajeForma2() {
    for (let i = 0; i < lenguajesDeProgramacion.length; i++) {
        const lenguaje = lenguajesDeProgramacion[i];
        console.log(lenguaje);
    }
    return;
}
mostrarLenguajeForma2();

// 5. Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.
function mostrarInversa() {
    for (let i = lenguajesDeProgramacion.length - 1; i >= 0; i--) {
        const lenguaje = lenguajesDeProgramacion[i];
        console.log(lenguaje);
    }
    return;
}
mostrarInversa();

// 6. Crea una función que calcule el promedio de los elementos en una lista de números.
function promedioLista(listaNumeros) {
    let suma = 0;
    for (let i = 0; i < listaNumeros.length; i++) {
        suma += listaNumeros[i];
    }
    return suma / listaNumeros.length;
}

let listaNumeros = [3, 6, 2, 9, 10];
console.log(`El promedio de los números es ${promedioLista(listaNumeros)}`);

// 7. Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.
function mostrarMenorYMayor(listaNumeros) {
    let mayor = listaNumeros[0];
    let menor = listaNumeros[0];
    for (let i = 1; i < listaNumeros.length; i++) {
        if (listaNumeros[i] < menor) {
            menor = listaNumeros[i];
        }
        if (listaNumeros[i] > mayor) {
            mayor = listaNumeros[i];
        }
    }
    console.log(`El mayor número de la lista es ${mayor} y el menor es ${menor}.`);
}
let listaMayorMenor = [7, 2, 1, 22, 31];
mostrarMenorYMayor(listaMayorMenor);

// 8. Crea una función que devuelva la suma de todos los elementos en una lista.
function sumaElementos(listaElementos) {
    let suma;
    for (let i = 0; i < listaElementos.length; i++) {
        suma += listaElementos[i];
    }
    return suma;
}
let listaElementos = [4, 100, 24, 13, 25.6]
sumaElementos(listaElementos);

// 9. Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.
function devolverPosicion(listaElem, elemento) {
    for (let i = 0; i < listaElem.length; i++) {
        if (listaElem[i] == elemento) {
            return [i];
        }
    }
    return -1;
}

let elemento = 13;
let listaElem = [4, 100, 24, 13, 25.6];
console.log(`La posición de ${elemento} en la lista es: ${devolverPosicion(listaElem, elemento)}`);

// 10. Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.
function sumaListas(lista1, lista2) {
    if (lista1.length !== lista2.length) {
        return ("Las listas deben tener el mismo tamaño.");
    }
    let resultado = [];
    for (let i = 0; i < lista1.length; i++) {
        resultado.push(lista1[i] + lista2[i]);
    }
    return resultado;
}
lista1 = [1, 6, 2, 8];
lista2 = [6, 2, 0, 3];
console.log(sumaListas(lista1, lista2))

// 11. Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.
function cuadradosLista(listaNumeros) {
    let listaCuadrados = [];
    for (let i = 0; i < listaNumeros.length; i++) {
        listaCuadrados.push(listaNumeros[i] * listaNumeros[i]);
    }
    return listaCuadrados;
}

listaNums = [3, 6, 12, 11];
console.log(cuadradosLista(listaNums));