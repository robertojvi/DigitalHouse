// TODO ---> 1
// Realizar una función que reciba por parámetro dos valores,
// el primero será numérico y el segundo booleano.
// Si el número es par y el booleano es true entonces retornar “Ha pasado la condición”.
// En cambio, si el número es impar y el booleano es false retornar “No ha pasado
// la condición”.
// Para cualquier otro caso, retornar -1

const verificar = (num, booleano) => {
  if (num % 2 === 0 && booleano === true) {
    return "Ha pasado la condición";
  } else if (num % 2 !== 0 && booleano === false) {
    return "No ha pasado la condición";
  } else {
    return -1;
  }
};

let resultado = verificar(14, true);
console.log(resultado);

let productos = [
  {
    nombre: "motorola",
    precio: 40,
    cantidad: 5,
    categoria: "telefonia",
  },
  {
    nombre: "notebook",
    precio: 80,
    cantidad: 10,
    categoria: "computacion",
  },
  {
    nombre: "zapatilla",
    precio: 20,
    cantidad: 2,
    categoria: "indumentaria",
  },
  {
    nombre: "Macbook",
    precio: 100,
    cantidad: 7,
    categoria: "computacion",
  },
  {
    nombre: "samsung",
    precio: 60,
    cantidad: 15,
    categoria: "telefonia",
  },
  {
    nombre: "monitor",
    precio: 30,
    cantidad: 5,
    categoria: "computacion",
  },
];

// TODO ---> Simulacion frontend E-commerce

/* 
  1)Las personas encargadas del backend nos enviaron una lista de productos pero 
      se olvidaron de asignarles un ID unico para cada producto,
      nuestra tarea es agregarles ese ID unico a cada uno
      Requisito: debe empezar en 1 y ser secuencial 
  2) Nos solicitan crear un algoritmo que pueda determinar el dinero total que ingresaria
      si se venden todos los productos que tenemos en stock
  3) Debemos crear una funcion que al ejecutarse filtre los productos que sean
      X categoria y retornar dichos productos en un nuevo arreglo(debe ser dinamica)
  4) Por ultimo debemos crear una funcion para poder aumentar el precio de una categoria
  especifica que recibiremos por parametros y tambien recibiremos por cuanto queremos
  multiplicar dicho precio
*/
const agregarId = (arreglo) => {
  for (let i = 0; i < arreglo.length; i++) {
    arreglo[i].id = i + 1;
  }
};

agregarId(productos);

console.log(productos);

const calcularTotal = (array) => {
  let acc = 0;

  for (let i = 0; i < array.length; i++) {
    acc += array[i].cantidad * array[i].precio; // {}
  }

  return acc;
};

let total = calcularTotal(productos);
console.log(total);

const filtrador = (arreglo, nombreDeLaCategoria) => {
  let arrayFiltrado = [];

  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i].categoria === nombreDeLaCategoria) {
      // {}.categoria
      arrayFiltrado.push(arreglo[i]);
    }
  }

  return arrayFiltrado;
};

let telefonicos = filtrador(productos, "telefonia");
console.log(telefonicos);


const aumentador = ( array, categoria , aumento )=>{

  for (let i = 0; i < array.length; i++) {
    if(array[i].categoria === categoria){
      array[i].precio = array[i].precio * aumento  // 20 * 1.50
    }
  }

}
aumentador(productos, "computacion", 1.50)

console.log( productos )



let numeros = [ 12, 4, 22, 16, 3, 11 ]
// saber el menor
// saber el mayor 

// console.log( Math.min(...numeros) )
// console.log( Math.max(...numeros) )

const encontrarMenor = ( arreglo )=>{

  let menor = arreglo[0] // 12 - 4 - 3

  for (let i = 0; i < arreglo.length; i++) {
    if( menor > arreglo[i] ){
        menor = arreglo[i]
    }
  }

  return menor 

}
const elMenor = encontrarMenor(numeros)

let numeros2 = [ 12, 54, 22, 16, 3, 11 ]


const encontrarMayor = ( arreglo )=>{

  let mayor = arreglo[0] // 12 - 54 

  for (let i = 0; i < arreglo.length; i++) {
    if( mayor < arreglo[i] ){
        mayor = arreglo[i]
    }
  }

  return mayor 

}

const elMayor = encontrarMayor(numeros2)
console.log(elMenor)
console.log(elMayor)



// 1 ---> suele ser de funciones 
// 2 ---> condicionales
// 3 ---> arreglos y objetos
