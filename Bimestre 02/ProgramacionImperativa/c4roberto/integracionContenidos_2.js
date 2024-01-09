const prompt = require("prompt-sync")({ sigint: true });

// Loop de pares

let loopDePares = (num) => {
    for (let index = 0; index <= 100; index++) {
        console.log(`Loop # ${index}`);
        if ((index + num) % 2 === 0) {
            console.log(`El número ${index + num} es par`);
        }
    }
}

// loopDePares(3)

// Loop de impares con palabra

let loopDeImpares = (numero, palabra) => {
    for (let index = 0; index <= 100; index++) {
        console.log(`Loop # ${index}`);
        if ((index + numero) % 2 !== 0) {
            console.log(palabra);
        }
    }
}

// loopDeImpares(4, "Excelente")

// Sumatoria

let sumatoria = (numero) => {
    let sumaTotal = 0
    for (let index = 0; index <= numero; index++) {
        sumaTotal += index
    }
    return sumaTotal
}

// console.log(sumatoria(8));

// Nuevo arreglo

let nuevoArreglo = (numero) => {
    let arregloNumeros = []
    for (let index = 1; index <= numero; index++) {
        arregloNumeros.push(index)
    }
    return arregloNumeros
}

// console.log(nuevoArreglo(9));

// Similar String.plit()

let split = (string) => {
    let stringSplit = []
    for (let index = 0; index < string.length; index++) {
        stringSplit.push(string[index]);
    }
    return stringSplit
}

// console.log(split("HolaHola"));

// Manejando dos arreglos

let arrayHandler = (arreglo1, arreglo2) => {
    for (let index = 0; index < arreglo1.length; index++) {
        console.log(`Soy ${arreglo1[index]} y yo soy ${arreglo2[index]}`);
    }
}

// arrayHandler([1,2,3,4], ["h","o","l","a"])

// Palíndromo

let palindromo = (palabra) => {
    let arregloPalabra = split(palabra)
    let arregloInvertido = []
    for (let index = palabra.length - 1; index >= 0; index--) {
        arregloInvertido.push(palabra[index]);
    }
    let palabraOriginal = arregloPalabra.join("")
    let palabraInvertida = arregloInvertido.join("")
    console.log(palabraOriginal)
    console.log(palabraInvertida)
    return palabraOriginal == palabraInvertida

}

// console.log(palindromo("ana"));

// console.log(palindromo("romaamor"));

// SEGUNDA PARTE INTEGRACIÓN DE CONTENIDOS

const edades = [11, 12, 15, 18, 25, 22, 10, 33, 18, 5];

// Obtener un nuevo array con las edades menores a 18

let menores18 = (array) => {
    let arrayMenores18 = []
    for (let index = 0; index < array.length; index++) {
        if (array[index] < 18) {
            arrayMenores18.push(array[index]);
        }
    }
    return arrayMenores18
}

// console.log(menores18(edades));

// Obtener un nuevo array con las edades mayores o igual a 18
let mayores18 = (array) => {
    let arrayMayores18 = []
    for (let index = 0; index < array.length; index++) {
        if (array[index] >= 18) {
            arrayMayores18.push(array[index]);
        };
    }
    return arrayMayores18
}

// console.log(mayores18(edades));

// Obtener un nuevo array con las edades igual a 18
let igual18 = (array) => {
    let arrayIgual18 = []
    for (let index = 0; index < array.length; index++) {
        if (array[index] === 18) {
            arrayIgual18.push(array[index]);
        };
    }
    return arrayIgual18
}

// console.log(igual18(edades));

// Obtener el menor

let menor = (array) => {
    let menorEdad = array[0];
    for (let index = 0; index < array.length; index++) {
        if (array[index] < menorEdad) {
            menorEdad = array[index];
        };
    }
    return menorEdad
}

// console.log(menor(edades));

// obtener el mayor

let mayor = (array) => {
    let mayorEdad = array[0];
    for (let index = 0; index < array.length; index++) {
        if (array[index] > mayorEdad) {
            mayorEdad = array[index];
        };
    }
    return mayorEdad
}

// console.log(mayor(edades));

// obtener elpromedio de todas las edades

let promedio = (array) => {
    let suma = 0;
    for (let index = 0; index < array.length; index++) {
        suma += array[index];
    }
    return suma / array.length
}

// console.log(promedio(edades));

// sumar 1 a cada edad

let edadesMas1 = (array) => {
    let edadesMas1 = []
    for (let index = 0; index < array.length; index++) {
        edadesMas1.push(array[index] + 1);
    }
    return edadesMas1
}

// console.log(edadesMas1(edades));

// 2 trabajando con objetos literales

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
            estaHabilitada: true,
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

// Obtener un nuevo array de cuentas cuyas edades sean menores a 30

let cuentasEdadMenor30 = (array) => {
    let edadesMenor30 = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i].edadTitular < 30) {
            edadesMenor30.push(array[i]);
        }
    }
    return edadesMenor30;
}

// console.log(cuentasEdadMenor30(arrayCuentas));

// Obtener un nuevo array de cuentas cuyas edades sean mayor o igual a 30

let cuentasEdadMayor30 = (array) => {
    let edadesMayor30 = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i].edadTitular >= 30) {
            edadesMayor30.push(array[i]);
        }
    }
    return edadesMayor30;
}

// console.log(cuentasEdadMayor30(arrayCuentas));

// Obtener un nuevo array de cuentas cuyas edades sean menores o igual a 30

let cuentasEdadMenorIgual30 = (array) => {
    let cuentasMenorIgual30 = []
    for (let i = 0; i < array.length; i++) {
        if (array[i].edadTitular <= 30) {
            cuentasMenorIgual30.push(array[i]);
        };
    }
    return cuentasMenorIgual30
}

// console.log(cuentasEdadMenorIgual30(arrayCuentas));

// Obtener la cuenta con el titular de la misma más joven.

let cuentaTitularMasJoven = (array) => {
    let cuentaMasJoven = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i].edadTitular < cuentaMasJoven.edadTitular) {
            cuentaMasJoven = array[i];
        }
    }
    return cuentaMasJoven;
}

// console.log(cuentaTitularMasJoven(arrayCuentas));

// Obtener un array con las cuentas habilitadas 

let cuentasHabilitadas = (array) => {
    let habilitadas = []
    for (let i = 0; i < array.length; i++) {
        if (array[i].estaHabilitada) {
            habilitadas.push(array[i]);
        }
    }
    return habilitadas;
}

// console.log(cuentasHabilitadas(arrayCuentas));

// Obtener un array con las cuentas deshabilitadas 

let cuentasDeshabilitadas = (array) => {
    let deshabilitadas = []
    for (let i = 0; i < array.length; i++) {
        if (array[i].estaHabilitada === false) {
            deshabilitadas.push(array[i]);
        }
    }
    return deshabilitadas;
}

// console.log(cuentasDeshabilitadas(arrayCuentas));


// Obtener la cuenta con el menor saldo

let cuentaMenorSaldo = (array) => {
    let menorSaldo = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i].saldo < menorSaldo.saldo) {
            menorSaldo = array[i];
        }
    }
    return menorSaldo;
}
// console.log(cuentaMenorSaldo(arrayCuentas));


// Obtener la cuenta con el mayor saldo

let cuentaMayorSaldo = (array) => {
    let mayorSaldo = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i].saldo > mayorSaldo.saldo) {
            mayorSaldo = array[i];
        }
    }
    return mayorSaldo;
}
// console.log(cuentaMayorSaldo(arrayCuentas));

// obtener el promedio de las cuentas

let promedioCuentas = (array) => {
    let suma = 0;
    for (let i = 0; i < array.length; i++) {
        suma += array[i].saldo;
    }
    return suma / array.length;
}
console.log(promedioCuentas(arrayCuentas));

// Desarrollar una función llamada generarID que reciba como parámetro el array de cuentas y 
//agregue a cada elemento (objeto literal) una propiedad llamada id con un valor Numérico

let generarID = (array) => {
    for (let i = 0; i < array.length; i++) {
        array[i].id = i + 1
    }
}

console.log(generarID(arrayCuentas));


// Desarrollar una función llamada buscarPorId que reciba como parámetro el array de cuentas 
// y un id, en caso de encontrar retornar la cuenta (él objeto literal completo), 
// caso contrario retornar null

let buscarPorId = (array, id) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i].id === id) {
            return array[i];
        }
    }
    return null
}

console.log(buscarPorId(arrayCuentas, 4));

// Desarrollar una función llamada filtrarPorSaldos que reciba como parámetro el array de cuentas 
// y un saldo (Number), deberá retornar un array que se cuyas cuentas se encuentren por debajo del 
// saldo enviado por parámetro

let filtrarPorSaldos = (array, saldo) => {
    let cuentasDebajoSaldo = []
    for (let index = 0; index < array.length; index++) {
        if (array[index].saldo < saldo) {
            cuentasDebajoSaldo.push(array[index]);
        }   
    }
    return cuentasDebajoSaldo
}

console.log(filtrarPorSaldos(arrayCuentas, 10000));


// Desarrollar una función llamada incrementarSaldo que reciba como parámetro el array de cuentas, 
// un id y un saldo, deberá incrementar él saldo de la cuenta, en caso de encontrar, 
// caso contrario retornar undefined 
// Reutilizando la función  buscarPorId 

let incrementarSaldo = (array, id, saldo) => {
    let cuenta = buscarPorId(array, id)
    if (cuenta !== null) {
        cuenta.saldo += saldo
        return cuenta
    } else {
        return undefined
    }
}

console.log(incrementarSaldo(arrayCuentas, 4, 10000));

