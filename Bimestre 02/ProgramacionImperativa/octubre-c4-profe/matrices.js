// ANCHOR ---> Matrices --> arreglos bidimensionales

let a = [1, 5, 3];

// console.log ( mat[1][1] )

// FILAS Y COLUMNAS

let mat = [
  [1, 2, 3], // fila 0
  [4, 5], // fila 1
];

// console.log( mat[1][0] )
// 3filas x 3columnas
// MATRIZ CUADRADA

let matriz = [
  [1, 5, 4],
  [6, 8, 7],
  [3, 7],
];

// RECORRER
// RECORRER UNA FILA ---> la fila es estatica y la columna es dinamica

// mat[1][0]
// mat[1][1]
// mat[1][2]

const recorrerFila = (mat, numFila) => {
  let acc = 0;
  for (let i = 0; i < mat[numFila].length; i++) {
    acc += mat[numFila][i];
  }
  return acc;
};
let res = recorrerFila(matriz, 1);

console.log(res);

// RECORRER UNA COLUMNA  --> le pido la longitud a la matriz

let matriz2 = [[1, 5, 4], [6, 8], [3], [3, 7, 8], [3, 7], [3, 7, 8]];

// matriz2[0][2]
// matriz2[1][2]
// matriz2[2][2]

const recorrerCol = (mat, numCol) => {
  let acc = 0;
  for (let i = 0; i < mat.length; i++) {
    if (mat[i][numCol] !== undefined) {
      acc += mat[i][numCol];
    }
  }
  return acc;
};
let res2 = recorrerCol(matriz2, 1);
console.log(res2);

// SI LA MATRIZ ES CUADRADA ---> DIAGONAL

let matrix = [
  [1, 5, 4, 2],
  [2, 7, 1, 2],
  [1, 8, 3, 2],
  [1, 8, 3, 2],
];

// RECORRER LA PRINCIAL --> le pido la longitud a la matriz

// matrix[0][0]
// matrix[1][1]
// matrix[2][2]

const recorrerPrincipal = (mat) => {
  for (let i = 0; i < mat.length; i++) {
    mat[i][i];
  }
};

// RECORRER LA SECUNDARIA --> le pido la longitud a la matriz

// matrix[0][2]
// matrix[1][1]
// matrix[2][0]

let matrix2 = [
  [1, 5, 4],
  [2, 7, 1],
  [1, 8, 3],
];

const recorrerSec = (mat) => {
  for (let i = 0; i < mat.length; i++) {
    console.log(mat[i][mat.length - 1 - i]); //
  }
};
recorrerSec(matrix2);

// RECORRER LA MATRIZ COMPLETA ---> DOBLE FOR
console.log("-----------------");
let matrix3 = [
  [1, 5, 4],
  [2, 7, 1, 5, 6],
  [2, 7],
];

// const recorrerCompleta = mat => {

//    for( let i = 0 ; i < mat.length; i++ ){ // i maneja las filas

//         console.log("estoy en la fila " + i )
//         for( let j = 0 ;  j < mat[i].length; j++ ){ // j maneja las columnas
//             console.log( "estoy en la columna " + j)
//             console.log( mat[i][j])
//         }

//    }

// }
// recorrerCompleta(matrix3)

const recorrerCompleta = (mat) => {
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[i].length; j++) {
      mat[i][j];
    }
  }
};
recorrerCompleta(matrix3);

let febrero = [
  // EMPEZAREMOS A CONTAR LOS DIAS DESDE EL DIA LUNES
  // EL MES ES FEBRERO QUE TIENE 28 DIAS
  [1135, 2500, 900, 1600, 2800, 3650, 1100], // semana 1
  [1750, 1890, 1900, 1300, 898, 1750, 2800], // semana 2
  [1700, 1150, 1690, 1900, 1770, 4500, 2560], // semana 3
  [800, 1250, 1430, 2100, 1980, 1270, 950], // semana 4
];

//TODO
// CREANDO UNA FUNCION REUTILIZABLE...
// CALCULAR GASTO TOTAL DE LA TERCER SEMANA

const totalSemanal = ( gastos, numSemana )=>{

    let posicion = numSemana - 1
    let acc = 0

    for(let i = 0; i < gastos[posicion].length; i++ ){
        acc += gastos[posicion][i]
    }

    return acc 

}

let totalSemanaTres = totalSemanal( febrero, 3 )
console.log( totalSemanaTres )

//TODO
// CREANDO UNA FUNCION REUTILIZABLE...
// QUEREMOS SABER EL TOTAL DE LO QUE SE GASTO SUMANDO TOD´OS LOS DIAS SABADOS
// ¿COMO LO HARIAS?

let febreroo = [
    // EMPEZAREMOS A CONTAR LOS DIAS DESDE EL DIA LUNES
    // EL MES ES FEBRERO QUE TIENE 28 DIAS
    [1135, 2500, 900, 1600, 2800, 3650, 1100], // semana 1
    [1750, 1890, 1900, 1300, 898, 1750, 2800], // semana 2
    [1700, 1150, 1690, 1900, 1770, 4500, 2560], // semana 3
    [800, 1250, 1430, 2100, 1980, 1270, 950], // semana 4
];

const totalDia = (gastos, numDia )=>{
    let posicion = numDia - 1
    let acc = 0

    for(let i = 0 ; i < gastos.length; i++){
        acc += gastos[i][posicion]
    }

    return acc

}

let totalSabados = totalDia(febreroo, 6)
console.log(totalSabados)


//TODO
// CALCULAR EL TOTAL GASTADO DEL MES

let febrerooo = [
    // EMPEZAREMOS A CONTAR LOS DIAS DESDE EL DIA LUNES
    // EL MES ES FEBRERO QUE TIENE 28 DIAS
    [1135, 2500, 900, 1600, 2800, 3650, 1100], // semana 1
    [1750, 1890, 1900, 1300, 898, 1750, 2800], // semana 2
    [1700, 1150, 1690, 1900, 1770, 4500, 2560], // semana 3
    [800, 1250, 1430, 2100, 1980, 1270, 950], // semana 4
];

const totalMensual = ( gastos )=>{

    let acc = 0

    for(let i = 0 ; i < gastos.length; i++){

        for(let j = 0; j < gastos[i].length ; j++){
           acc += gastos[i][j]
        }

    }

    return acc

}

let totalFebrero = totalMensual(febrerooo)
console.log(totalFebrero)

// TODO
// EN EL DIA QUE MAS SE GASTO, CUANTO FUE ?
// EN QUE DIA Y SEMANA , SE PRODUJO ESE GASTO?
