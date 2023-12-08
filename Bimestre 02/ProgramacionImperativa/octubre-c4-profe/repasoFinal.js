// TODO FILTRAR LOS PRODUCTOS QUE TENGAN MENOS DE 10 UNIDADES EN STOCK
// Y RETORNARLO

let items = [
  {
    nombre: "televisor",
    precio: 500,
    stock: 7,
  },
  {
    nombre: "tablet",
    precio: 350,
    stock: 12,
  },
  {
    nombre: "celular",
    precio: 400,
    stock: 21,
  },
  {
    nombre: "notebook",
    precio: 600,
    stock: 5,
  },
];

const filtrador = (arr) => {
  let nuevoArreglo = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].stock < 10) {
      nuevoArreglo.push(arr[i]);
    }
  }

  return nuevoArreglo;
};

let res = filtrador(items);
console.log(res);

// TODO ORDENAR EL ARREGLO DE FORMA DESCENDENTE

let edades = [2, 12, 1, 5, 32, 56, 7];
let palabras = [ "casa", "mariposa", "abeja", "zoo", "avion"]


const bubble = (arr) => {
  let temp;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] < arr[j + 1]) {
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

};

bubble(edades);

console.log( edades )

bubble( palabras )

console.log( palabras )

// TODO ORDENAR EL ARREGLO DE FORMA ASCENDENTE SEGUN LA CANTIDAD DE STOCK

let productos = [
  {
    nombre: "televisor",
    precio: 500,
    stock: 7,
  },
  {
    nombre: "tablet",
    precio: 350,
    stock: 21,
  },
  {
    nombre: "celular",
    precio: 400,
    stock: 12,
  },
  {
    nombre: "notebook",
    precio: 600,
    stock: 16,
  },
];

const bubbleObj = (arr) => {
  let temp;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if ( arr[j].stock > arr[j + 1].stock ) { 
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

};

bubbleObj( productos)
console.log( productos )

// DADA LA SIGUIENTE MATRIZ

let matriz1 = [
  [2, 4, 3],
  [3, 1, 5], // [9, 3, 15]
  [8, 4, 9],
];

// TODO ---> UN SOLO CICLO
// CREAR UNA FUNCION QUE RETORNE UN NUEVO ARREGLO
// CON TODOS LOS ELEMENTOS DE LA FILA de la posicion 1 (multiplicados x 3)

const fila = (mat)=>{

  let nuevo = [ ]

  for(let i = 0 ; i < mat[1].length; i++ ){
      nuevo.push(mat[1][i] * 3)
  }

  return nuevo

}

let resultado = fila(matriz1)
console.log(resultado)



let matriz2 = [
  [2, 4, 3],
  [3, 1, 5],
  [8, 4],
  [1, 4, 9],
];

// TODO CREAR UNA FUNCION QUE MODIFIQUE LOS ELEMENTOS IMPARES DE
// LA COLUMNA 2, POR UN numero cero"

const columna = mat =>{

  for(let i = 0; i < mat.length; i++ ){
    
    if( mat[i][2] !== undefined && mat[i][2] % 2 !== 0){

      mat[i][2] = 0
       
    }

  }

}

columna( matriz2 )
console.table( matriz2 )

let matriz5 = [
  [2, 4, 3],
  [3, 1, 5],
  [8, 4, 9],
];

// TODO --> ACA DOBLE FOR
// CAMBIAR TODOS LOS ELEMENTOS DE LA MATRIZ POR SU NEGATIVO

const recorrerMatriz = mat => {

  for( let i = 0; i < mat.length; i++){

    for( let j = 0; j < mat[i].length; j++ ){
        // mat[i][j] =  mat[i][j] *(-1)
        mat[i][j] *= (-1)
    }

  }

}

recorrerMatriz(matriz5)
console.table(matriz5)


// let a = 5 
// a = a * (-1)
// a *= (-1)

// a += 1
// a = a + 1

// let edades2 = [{n: "pepe", votos: 2} 12, 1, 5, 32, 56, 7];

// console.log( edades[0].nombre )
// console.log( edades[1] )
// console.log( edades[2] )

// console.log( edades[ edades.length - 1] )