// Array -- arreglo -- coleccion -- lista

// let n1 = 54
// let n2 = 21
// let n3 = 12
// let n4 = 124

// elementos
// posiciones -- 0
let numerosDeLaSuerte = [54, 21, 12, 124, 15];

console.log(numerosDeLaSuerte[0]);

// caracteres
let palabra = "casa";
console.log(palabra[1]);

// palabra = "CASA"
palabra = palabra.toUpperCase();

console.log(palabra);

console.log(palabra.length);
console.log(numerosDeLaSuerte.length);

let email = "pepegmail.com";
// @

let emailValido = email.includes("@");
console.log(emailValido);

// if( emailValido  ){

// }else{

// }

let numerosDeLaSuerteDos = [54, 21, 12, 124, 15];

console.log(numerosDeLaSuerteDos);

numerosDeLaSuerteDos.push(81, 12, 21);

console.log(numerosDeLaSuerteDos);

let cortado = numerosDeLaSuerteDos.pop();

console.log(numerosDeLaSuerteDos);
console.log(cortado);

let arr = [15, 12];

let arrInvertido = []; // [25, 1, 12, 15]

arrInvertido.push(arr.pop());
arrInvertido.push(arr.pop());
arrInvertido.push(arr.pop());
arrInvertido.push(arr.pop());

console.log(arrInvertido);

let mascotas = ["jack", "lola", "rojo", "firulais"];

let posicionRojo = mascotas.indexOf("rojo");
console.log(posicionRojo);

// iterar o recorrer un array

// DADO EL ARRAY DE MASCOTAS
// DEVOLVER UN NUEVO ARRAY PERO CON TODAS LAS MASCOTA EN MAYUSCULA

const recorrerArray = (arreglo) => {
  let nuevoArreglo = [];

  for (let i = 0; i < arreglo.length; i++) {
    nuevoArreglo.push(arreglo[i].toUpperCase());
  }

  return nuevoArreglo;
};

let mascotasGrandes = recorrerArray(mascotas);
console.log(mascotasGrandes);

let noviembre = [54, 21, 12, 124, 15, 766, 12, 11, 9898, 11, 2, 540];

const obtenerElTotalVendido = (array) => {
  let acc = 0;

  for (let i = 0; i < array.length; i++) {
    acc += array[i];
  }

  return acc;
};

let totalVendidoEnNoviembre = obtenerElTotalVendido(noviembre);
console.log(totalVendidoEnNoviembre);

console.log("----");

let numbers = [22, 33, 54, 66, 72];

console.log(numbers[numbers.length - 1]);

/* TODO :
    A partir de un array de correos, recorrerlo para corroborar si son válidos. 
    Para ello, por el momento, debemos buscar el carácter “@” en cada elemento y 
    agregar aquellos que lo tengan al array de correos admitidos.
    En caso de no encontrar el carácter, se deberá agregar al array de correos descartados.
    Desarrollar una función que realice la verificación de cada elemento del array 
    de correos pendientes. En caso de validar, agregar al arrayCorreoAdmitidos. Caso contrario, 
    agregar al arrayCorreoDescartados (vaciar el array de correos pendientes).
    Mostrar por pantalla la cantidad y los elementos de cada array.
*/

// PARA SER VALIDO DEBE CONTENER UN @
let arrayCorreosPendientes = [
  "iroman@digitalhouse.com",
  "loki%digitalhouse.com",
  "loki@digitalhouse.com",
  "thanosdigitalhouse.com",
  "thanos@digitalhouse.com",
];

// array de correos admitidos
let arrayCorreosAdmitidos = [];

// array de correos descartados

let arrayCorreosDescartados = [];

const verificarCorreos = (array) => {

    for( let i = 0 ; i < array.length ; i++ ){
      
        if( array[i].includes("@") ){
            arrayCorreosAdmitidos.push( array[i] )
        }else{
            arrayCorreosDescartados.push( array[i] )
        }
        
    }

    arrayCorreosPendientes = []


};

verificarCorreos(arrayCorreosPendientes)

console.log(arrayCorreosPendientes)
console.log(arrayCorreosAdmitidos)
console.log(arrayCorreosDescartados)

