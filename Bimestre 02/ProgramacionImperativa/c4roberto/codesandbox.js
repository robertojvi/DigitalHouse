/**
 * Escribir un programa que muestre por consola
 * los números del 1 al 100, sustituyendo los
 * múltiplos de 3 por la palabra “fizz”,
 * los múltiplos de 5 por “buzz” y los múltiplos
 * de ambos, es decir, los múltiplos de 3 y 5
 * (o de 15), por la palabra “fizzbuzz”.
 */

let fizzBuzz = () => {
    for (let i = 0; i <= 100; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            console.log("fizzbuzz");
        } else if (i % 3 == 0) {
            console.log("fizz");
        } else if (i % 5 == 0) {
            console.log("buzz");
        } else {
            console.log(i);
        }
    }
};

fizzBuzz();


/**
 * Escriba una función que reciba dos parámetros:
 * una array y un índice. La función mostrar por consola
 * el valor del elemento en la posición dada
 * (basado en uno). Por ejemplo, dado el siguiente
 * array:
 */
let array = [
    3,
    6,
    67,
    6,
    23,
    11,
    100,
    8,
    93,
    0,
    17,
    24,
    7,
    1,
    33,
    45,
    28,
    33,
    23,
    12,
    99,
    100
];

/**
 * Y el siguiente indice:
 */

let indice = 1;

/**
 * La funcion debera mostrar por consola el numero 6.
 */

// Extra: que pasa si cambias el valor de la variable indice a 10?
// Si tu función esta bien, deberias ver el numero 17 por consola.

// Escribe tu función debajo de esta linea.
let mostrarValorIndice = (array, indice) => {
    console.log(array[indice]);
};

// Invoca tu función debajo de esta linea.
mostrarValorIndice(array, 12);


// Escribir una función que, dado un número de mes, devuelva la cantidad
// de días de ese mes —suponiendo que no es un año bisiesto—.

let cantidadDeDias = (mes) => {
    switch (mes) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            return 31;
        case 4:
        case 6:
        case 9:
        case 11:
            return 30;
        case 2:
            return 28;
        default:
            return 0;
    }
}    

console.log(cantidadDeDias(2));




/**
 * Escribir una función de JavaScript que invierta
 * un número. Por ejemplo, si x = 32443,
 * la salida debería ser 34423.
 */


let invertirNumero = (numero) => {
    let string = String(numero);
    let invertido = []
    for (let index = string.length - 1; index >= 0; index--) {
        invertido.push(string[index]);
    }
    return Number(invertido.join(""));  
}

console.log();


/**
 * Escribir una función que reciba una array
 *  y solo imprima los valores que se repiten.
 *  Por ejemplo, dada la siguiente array e índice,
 *  la función imprimirá '6,23,33,100'.
 * let array = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100];
 */


let arr = [3, 6, 67, 6, 23, 11, 100, 8, 93, 0, 17, 24, 7, 1, 33, 45, 28, 33, 23, 12, 99, 100];

let repetidos = (arr) => {
    let arrayRepetidos = []
    for (let index = 0; index < arr.length; index++) {
        if (arr.indexOf(arr[index]) !== index) { // indexOf devuelve el primer indice, si es diferente del indice quiere decir que hay otro elemento igual

            arrayRepetidos.push(arr[index]);
        }       
    }
    return arrayRepetidos
}

console.log(repetidos(arr));



// Dado los siguientes numeros:

let num1 = 43;
let num2 = 78;
let num3 = 14;

// Crea un algoritmo que te permita identificar
// el numero mayor. Utiliza condicionales como el
// if, else, o else if.

// Escribe tu código debajo de estas lineas,
// y observa los resultados por la consola.
// especificamente para este conjunto de datos
// deberias ver por consola el numero 78,
// adicional, cambia los valores de num1, num2 y num3
// para verificar que tu algoritmo funcione con
// cualquiera 3 valores.

let mayor = (num1, num2, num3) => {
    if (num1 > num2 && num1 > num3) {
        return num1
    } else if (num2 > num1 && num2 > num3) {
        return num2
    } else {
        return num3
    }
}

console.log(mayor(num1, num2, num3));


// Ahora bien. dado los siguientes numeros:

let nume1 = 13;
let nume2 = 1663;
let nume3 = 3363;
let nume4 = 98798
// agrega una variable mas, llamada num4
// con un valor numerico

// Crea un algoritmo que te permita identificar
// el numero mayor de los 4 anteriores.

// Escribe tu código debajo de esta linea,
// y observa los resultados por la consola.
// Adicional, cambia los valores de los 4 numeros
// para ver que algoritmo funciona con cualquier
// conjunto de 4 numeros.

let numeroMayor = (nume1, nume2, nume3, nume4) => {
    if (nume1 > nume2 && nume1 > nume3 && nume1 > nume4) {
        return nume1
    } else if (nume2 > nume1 && nume2 > nume3 && nume2 > nume4) {
        return nume2
    } else if (nume3 > nume1 && nume3 > nume2 && nume3 > nume4) {
        return nume3
    } else {
        return nume4
    }   
}

console.log(numeroMayor(nume1, nume2, nume3, nume4));