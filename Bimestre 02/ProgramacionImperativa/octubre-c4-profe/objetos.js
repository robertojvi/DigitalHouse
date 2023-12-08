// OBJETOS Literales ---> diccionario

// let nombreUsuario = "pepe"
// let edadUsuario = 12
// let direccion = "italia 192"
// let saludar = ()=>{
//     console.log("hola soy pepe")
// }

// propiedad (cosas que describen el objeto )
// metodos ( cosas que puede hacer el objeto )

// pares ---> clave : valor
const saludarFn = function () {
  return "hola soy " + this.nombre;
};

let usuario = {
  nombre: "pepe",
  edad: 12,
  direccion: "italia 192",
  saludar: saludarFn,
};

let usuario2 = {
  nombre: "carmen",
  edad: 12,
  direccion: "italia 192",
  saludar: saludarFn,
};

let usuario3 = {
  nombre: "maria",
  edad: 12,
  direccion: "italia 192",
  saludar: saludarFn,
};

// dot notation
// console.log( usuario.edad )
// console.log( usuario.direccion )
console.log(usuario.saludar());
console.log(usuario2.saludar());
console.log(usuario3.saludar());

let persona = {
  nombre: "maria",
  edad: 12,
  direccion: "italia 192",
  saludar: saludarFn,
};

// modificar

persona.nombre = "fulanito";
persona.edad += 1;

// agregar
persona.esMayor = true;

persona.Nombre = "pepe";

// eliminar

delete persona.direccion;

console.log(persona);

// tablas y registros

// Arreglos de objetos

let calcularPromedio = function () {
  let acc = 0;
  for (let i = 0; i < this.notas.length; i++) {
    acc += this.notas[i];
  }
  return acc / this.notas.length;
};

let estudiantesJavascript = [
  {
    nombre: "pepe",
    edad: 21,
    notas: [10, 8, 10],
    promediar: calcularPromedio,
  },
  {
    nombre: "maria",
    edad: 18,
    notas: [9, 8, 7],
    promediar: calcularPromedio,
  },
  {
    nombre: "carlitos",
    edad: 19,
    notas: [10, 9, 2],
    promediar: calcularPromedio,
  },
];

const funcionParaLaProfesora = (array) => {
  for (let i = 0; i < array.length; i++) {
    console.log(
      `El alumno ${array[i].nombre} tiene un promedio de ${array[i].promediar()}`
    );
  }
};

funcionParaLaProfesora(estudiantesJavascript);
