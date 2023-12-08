// ESTRUCTURAS DE REPETICION

// ciclos -- loops -- bucles

// for -- while -- do while

const probandoFor = () => {
  // inicializacion ; condicion ; modificador

  for (let i = 1; i <= 5; i++) {
    console.log("hola");
    console.log(true);
    console.log(5);
  }
};

probandoFor();

// let num = 10

// num = num + 1
// num += 1
// num++

// 1 + 2  + 3 + 4  + 5 = 15
// cuando es par

const sumatoria = (numInicial, numFinal) => {
  let acumulador = 0; //15

  for (let i = numInicial; i <= numFinal; i++) {
    if (i % 2 === 0) {
      acumulador = acumulador + i;
    }
  }

  return acumulador;
};

let res = sumatoria(1, 5); // 6
console.log(res);

let res2 = sumatoria(10, 13); // 22
console.log(res2);

let num = 7;

// si quiero que me de true cuando el numero es par

console.log(num % 2 === 0); //--> da true cuando es par

// si quiero que me de true cuando el numero es impar
console.log(num % 2 !== 0); //--> da true cuando es impar

// tabla de multiplicar

// 7
// 7 * 1 = 7
// 7 * 2 = 14
// ......
// 7 * 10 = 70
console.log("------------------");
const tablaDeMultiplicar = (numero) => {
  for (let i = 1; i < 10; i++) {
    // console.log(`${numero} * ${i} = ${numero * i}`)
    console.log(numero + " * " + i + " = " + numero * i);
  }
};

tablaDeMultiplicar(3)

const tablaConWhile = (numero) => {
  let i = 1;
  while (i <= 10) {
    console.log(`${numero} * ${i} = ${numero * i}`);

    i++;
  }
};
// tablaConWhile(4);

const probandoDoWhile = () => {
  //   for(let i = 115; i < 10; i++){
  //       console.log("estoy dando la vuelta numero " + i)
  //   }

  //   let i = 10;
  //   while (i < 10) {
  //     console.log("estoy dando la vuelta numero " + i);
  //     i++;
  //   }

  let i = 125;
  do{
    console.log("estoy dando la vuelta numero " + i);
    i++;
  }while (i < 10) 
};

probandoDoWhile();

// [1, 5, 6 ]
// arr[0]
// arr[1]
// arr[2]