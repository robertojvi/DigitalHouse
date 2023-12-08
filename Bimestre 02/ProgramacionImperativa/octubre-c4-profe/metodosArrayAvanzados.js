let arrayCuentas = [
  {
    nroCuenta: 5486273622,
    tipoDeCuenta: "Cuenta Corriente",
    saldoEnPesos: 5,
    titularCuenta: "pepito",
  },
  {
    nroCuenta: 1183971869,
    tipoDeCuenta: "Caja de Ahorro",
    saldoEnPesos: 3,
    titularCuenta: "maria",
  },
  {
    nroCuenta: 9582019689,
    tipoDeCuenta: "Caja de Ahorro",
    saldoEnPesos: 2,
    titularCuenta: "juancito",
  },
  {
    nroCuenta: 1761924656,
    tipoDeCuenta: "Cuenta Corriente",
    saldoEnPesos: 1,
    titularCuenta: "carmen",
  },
  {
    nroCuenta: 7401971607,
    tipoDeCuenta: "Cuenta Unica",
    saldoEnPesos: 12,
    titularCuenta: "Jack",
  },
];

// CALLBACK ---> es una funcion que se pasa como argumento a otra funcion

const sumar = (a, b)=>{

}

sumar( ()=>{} , 65 )



// METODOS 
// let numeros = [ 5, 2, 7, 4 ]

//  numeros.includes( 7 )
//  numeros.push( "hola" )

//  const encontrar = (arr)=>{
//     for (let i = 0; i < arr.length; i++) {
//         if( arr[i].titularCuenta === "maria"){
//             return arr[i]
//         }
        
//     }

//     // return undefined
//  }

 // FIND --> me devuelve el elemento encontrado o undefined
 // me pide que le pase en el callback una condicion 

 let cliente = arrayCuentas.find( (cuenta) => (cuenta.titularCuenta === "maria")  )
 console.log(cliente)



 // FILTER ---> SIEMPRE DEVUELVE UN NUEVO ARREGLO 
 let arrayFiltrado = arrayCuentas.filter( (cuenta) => (cuenta.saldoEnPesos < 5) ) 
 console.log( arrayFiltrado )

let numeros = [ 6, 5, 7, 2] // nuevo arreglo [ 18, 15, 21, 6 ]

// MAP siempre devuelve un nuevo arreglo pero siempre de la misma longitud que el original
let x = numeros.map( (numero)=> numero * 3  ) // []
console.log(x)

let arrayNuevo = arrayCuentas.map( (cuenta)=> ({saldoEnPesos:cuenta.saldoEnPesos })  ) // []
console.log(arrayNuevo)

// FOREACH ---> recorre el arreglo pero me da la posibilidad de tener acceso a cada elemento
// por ende me permite ejecutar instrucciones

 arrayCuentas.forEach( (cuenta, i)=> cuenta.id = i + 1  )
 
 console.log(arrayCuentas)

 // SORT ---> MODIFICA EL ORIGINAL ORDENANDOLO

 let numeros2 = [ 6, 5, 7, 2 ]

 numeros2.sort( (elemento, siguiente)=> siguiente - elemento  )

 console.log( numeros2)

 arrayCuentas.sort( (a, b)=> b.saldoEnPesos - a.saldoEnPesos )
 console.log( arrayCuentas )

 // REDUCE ---> sirve para reducir a la minima expresion un arreglo 

 let total = numeros2.reduce( (acc, elemento )=>{ return acc + elemento } )
 console.log(total)

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

  let totalVendido = items.reduce( (acc, elemento)=>{ return acc + (elemento.stock * elemento.precio)}, 0 )

  console.log(totalVendido)