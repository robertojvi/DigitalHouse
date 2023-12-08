// ANCHOR ---> FUNCIONES

let nombre = "juan";
console.log(nombre);

// 3 tipos

// declaradas

function f1() {
  let edad = 5;
  console.log(edad);
}

f1();

function saludar(nombre) {
  let saludo = "Hola como estas " + nombre;
  return saludo;
}

// console.log( saludar() ) --> ESTO NO

let saludoFinal = saludar("maria");
console.log(saludoFinal);

let nombreUsuario = "pepito";

function cambiarNombre() {
  nombreUsuario = "maria";
}

console.log(nombreUsuario);

cambiarNombre();

console.log(nombreUsuario);

console.log("-----");



function sumar(n1 = 0, n2 = 0) {
  return n1 + n2;
}

let res2 = sumar(undefined, 2);
console.log(res2);

// let res = sumar(10, 20)
// console.log(res)

// let res3 = sumar(6, 1)
// console.log(res3)

// expresada comun --> anonimas

let restar = function (n1, n2) {
    let edad = 25
  return n1 - n2;
};

let res = restar(12, 54);
console.log(res)

// expresada de tipo flecha ---> arrow function --> anonimas

let multiplicar = (numero) => numero * 2

let resMulti = multiplicar(20)
console.log(resMulti)

// SCOPE ---> alcance
// unicamente en su mismo scope o en inferiores

let edad = 15

let probandoScope = ()=>{

    let edad = 20
    console.log(edad)
    
}

probandoScope()

