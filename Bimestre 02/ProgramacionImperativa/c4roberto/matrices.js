// Crear una función que genere una matriz de 10x10. Cada fila debe tener solo 10
// números.

let matriz10x10 = () => {
    let valor = 1
    let matriz = []
    for (let i = 0; i < 10; i++) {
        let array = []
        for (let j = 0; j < 10; j++) {
            array.push(valor)
            valor++
        }
        matriz.push(array)
    }
    return matriz

}

console.table(matriz10x10());

let matrix10x10 = matriz10x10();


let sumaDiagonalPrincipal = (matriz) => {
    let acc = 0
    for (let i = 0; i < matriz.length; i++) {
        acc += matriz[i][i]
    }
    return acc  
}

console.log(sumaDiagonalPrincipal(matrix10x10));

let sumaDiagonalSecundaria = (matriz) => {
    let acc = 0
    for (let i = 0; i < matriz.length; i++) {
        acc += matriz[i][matriz.length - 1 - i]
    }
    return acc  
}

console.log(sumaDiagonalSecundaria(matrix10x10));

/**
 * Declara una variable que contenga una matriz
 * de 5x5 llena de puros numeros enteros y positivos
 */

/**
 * Luego, escribe un algoritmo para sumar todos
 * los numeros en la matriz.
 */
let matriz = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25]
]

let sumaMatriz = (matriz) => {
    let acc = 0
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            acc += matriz[i][j];
        }
    }
    return acc
}

console.log(sumaMatriz(matriz));

