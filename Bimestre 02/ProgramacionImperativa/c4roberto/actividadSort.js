// A partir de él siguiente array de edades nos solicitan realizar lo siguiente

const edades = [33, 27, 34, 30, 34, 25];

// Desarrollar una función que ordene internamente de forma ascendente las edades

let ordenarAscendente = (array) => {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length -1 ; j++) {
            if (array[j]>array[j+1]){
                let aux = array[j];
                array[j] = array[j+1];
                array[j+1] = aux;
            }
        }
    }
}

ordenarAscendente(edades);
console.log(edades);

// Desarrollar una función que ordene internamente de forma descendente las edades
let ordenarDescendente = (array) => {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length -1 ; j++) {
            if (array[j] < array[j+1]){
                let aux = array[j];
                array[j] = array[j+1];
                array[j+1] = aux;
            }
        }
    }
}

ordenarDescendente(edades);
console.log(edades);

// dado un array de strings:
const letras = ["C", "A", "D", "E", "H", "Z", "J", "L"]

// ¿Cómo pudieras ordenar el array anterior, alfabéticamente?

// Se utiliza el mismo algoritmo de ordenamiento de burbuja ascendente

ordenarAscendente(letras);
console.log(letras);

// A partir del siguiente array de Objetos Literales se solicita realizar lo siguiente:

const arrayCuentas =
    [
        {
            titular: "Arlene Barr",
            estaHabilitada: false,
            saldo: 3253.40,
            edadTitular: 33,
            tipoCuenta: "sueldo"
        },
        {
            titular: "Roslyn Torres",
            estaHabilitada: false,
            saldo: 3229.45,
            edadTitular: 27,
            tipoCuenta: "sueldo"
        },
        {
            titular: "Cleo Lopez",
            estaHabilitada: true,
            saldo: 1360.19,
            edadTitular: 34,
            tipoCuenta: "corriente"
        },
        {
            titular: "Daniel Malone",
            estaHabilitada: false,
            saldo: 3627.12,
            edadTitular: 30,
            tipoCuenta: "sueldo"
        },
        {
            titular: "Ethel Leon",
            estaHabilitada: true,
            saldo: 1616.52,
            edadTitular: 34,
            tipoCuenta: "sueldo"
        },
        {
            titular: "Harding Mitchell",
            estaHabilitada: true,
            saldo: 1408.68,
            edadTitular: 25,
            tipoCuenta: "corriente"
        }
    ]

// Desarrollar una función que ordene internamente de forma ascendente según él saldo de cada cuenta

let ordenarSaldoAscendente = (array) => {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length -1 ; j++) {
            if (array[j].saldo > array[j+1].saldo){
                let aux = array[j];
                array[j] = array[j+1];
                array[j+1] = aux;
            }
        }
    }
}

ordenarSaldoAscendente(arrayCuentas);
console.log(arrayCuentas);


let ordenarEdadAscendente = (array) => {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length -1 ; j++) {
            if (array[j].edadTitular > array[j+1].edadTitular){
                let aux = array[j];
                array[j] = array[j+1];
                array[j+1] = aux;
            }
        }
    }
}

ordenarEdadAscendente(arrayCuentas);
console.log(arrayCuentas);
