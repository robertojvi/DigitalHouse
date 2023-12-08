// ANCHOR ALGORITMO DE ORDENACION ---> BUBBLE SORT


// numeros.sort( (a, b)=> b - a  ) // ESTO NO LO PUEDEN USAR

let numeros = [5, 2, 6, 1, 3] // [ 2, 5, 1 , 3, 6 ] // [2, 1, 3, 5, 6 ] // [1, 2, 3, 5, 6]

const bubbleSort = (array)=>{

    let temp = undefined

    for( let i = 0 ; i  < array.length ; i++ ){

        for(let j = 0 ; j < array.length - 1; j++ ){
            
            if( array[j].saldoEnPesos > array[j + 1].saldoEnPesos ) { 
                temp = array[j] 
                array[j] = array[j + 1] 
                array[j + 1] = temp  
            }

        }
     
     }
     
}

// bubbleSort(numeros)

// console.log(numeros)

// let palabras = [ "casa", "$avion", "Zoo", "Mariposa", "1231" ]

// bubbleSort(palabras)

// console.log( palabras )

let arrayCuentas = [
    {
      nroCuenta: 5486273622,
      tipoDeCuenta: "Cuenta Corriente",
      saldoEnPesos: 2,
      titularCuenta: "pepito",
    },
    {
      nroCuenta: 1183971869,
      tipoDeCuenta: "Caja de Ahorro",
      saldoEnPesos: 1,
      titularCuenta: "maria",
    },
    {
      nroCuenta: 9582019689,
      tipoDeCuenta: "Caja de Ahorro",
      saldoEnPesos: 4,
      titularCuenta: "juancito",
    },
    {
      nroCuenta: 1761924656,
      tipoDeCuenta: "Cuenta Corriente",
      saldoEnPesos: 3,
      titularCuenta: "carmen",
    },
    {
      nroCuenta: 7401971607,
      tipoDeCuenta: "Cuenta Unica",
      saldoEnPesos: 5,
      titularCuenta: "Jack",
    },
  ];

  bubbleSort( arrayCuentas)
  console.log(arrayCuentas)

// 1 previo al parcial
// 2 bubble sort
// 3 a matrices un solo for
// 3 b matrices doble for