//  ANCHOR ----> Variables ---> cajas que guardan algo

// let - const

let edad = 25;

let nombre = "Jorge";

const apellido = "Duje";

console.log(edad);

edad = 26;

console.log(edad);

// apellido = "lopez"

//  ANCHOR ----> Tipos de datos

// STRINGS --> cadenas de texto

let x = " mi mama me dijo 'como' estas ?  ";

// let frase = "hola como estas?"
// let frase2 =  'hola como estas?'

// NUMBERS --> numeros

let altura = 176.6;
let telefono = "1231245131";

console.log(typeof altura);
console.log(typeof telefono);

// BOOLEANS -> booleanos --> true y false

let estaLogueado = false;

console.log(typeof estaLogueado);

//  ANCHOR ----> Operadores

// matematicos

let a = 11;
let b = 2;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);

console.log(a % b); // ---> devolverme el resto o el residuo

// CONCATENAR

// let nombredelusuario =2
// let nombre_del_usuario =2

let nombreDelUsuario = "maria";

console.log("hola " + nombreDelUsuario + " " + apellido + " como estas?");

// TEMPLATE LITERALS ---> backticks ( interpolar variables )

console.log(`Hola ${nombreDelUsuario} ${apellido} como estas?`);

// comparacion --> que siempre devuelven un booleano

let nom = "juancito";
let esMayor = true;

console.log(esMayor === true);
console.log(nom === "pepe");
console.log("-----");

let n1 = 1;
let n2 = "1";

// console.log(n1 == n2); // ---> false --> simple
// console.log(n1 != n2); // ---> true --> simple
console.log(n1 === n2); // ---> false --> estricta
console.log(n1 !== n2); // ---> true --> estricta
console.log(n1 > n2); // ---> false
console.log(n1 < n2); // ---> true
console.log(n1 >= n2); // ---> false
console.log(n1 <= n2); // ---> true

// logicos
