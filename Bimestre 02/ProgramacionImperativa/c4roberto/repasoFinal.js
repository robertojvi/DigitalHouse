// En un concurso de fotografía, donde los usuarios publican una fotografía y obtienen
// likes, se registra la cantidad de likes obtenidos por cada usuario en un array. Ordenar
// los valores para poder indicar cuál fue la mayor cantidad de likes obtenidos, cuánto
// obtuvo el segundo, cuánto el tercero y cuánto el que menos likes obtuvo —suponer
// que participaron 15 usuarios y suponer para cada uno, una cantidad de likes—.

let likes = [
    200,
    900,
    950,
    1000,
    1050,
    1100,
    1150,
    225,
    250,
    300,
    500,
    550,
    600,
    650,
    700
]

let ordenarDescendente = (array) => {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length -1 ; j++) {
            if (array[j] < array[j+1]){
                let aux = array[j];
                array[j] = array[j+1];
                array[j+1] = aux;
            }
        }
    }
}

ordenarDescendente(likes);

console.log(likes);

console.log(likes[0]);
console.log(likes[1]);
console.log(likes[2]);
console.log(likes[likes.length-1]);






// El servicio meteorológico, para llevar el control diario de temperatura, utiliza un
// objeto temperatura donde registra día —valor numérico del día—, mes —valor
// numérico—, temperatura máxima y temperatura mínima, correspondiente a dicho
// día. Las temperaturas —objeto temperatura— están cargados en un array.
// a) Ordenar por temperatura mínima de menor a mayor.
// b) Ordenar por temperatura máxima de mayor a menor.


let temperaturas = [
    {
        dia: 1,
        mes: 1,
        maxima: 20,
        minima: 10  
    },
    {
        dia: 2,
        mes: 1,
        maxima: 28,
        minima: 14
    },
    {
        dia: 3,
        mes: 1,
        maxima: 25,
        minima: 13
    },
    {
        dia: 4,
        mes: 1,
        maxima: 30,
        minima: 11
    },
    {
        dia: 5,
        mes: 1,
        maxima: 24,
        minima: 17
    },  
    {
        dia: 6,
        mes: 1,
        maxima: 27,
        minima: 7
    }
]

let ordenarAscendente = (array) => {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length -1 ; j++) {
            if (array[j].minima>array[j+1].minima){
                let aux = array[j];
                array[j] = array[j+1];
                array[j+1] = aux;
            }
        }
    }
}

ordenarAscendente(temperaturas);

console.log(temperaturas);

let ordenarDescendenteObjetos = (array) => {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length -1 ; j++) {
            if (array[j].maxima<array[j+1].maxima){
                let aux = array[j];
                array[j] = array[j+1];
                array[j+1] = aux;
            }
        }
    }
}

ordenarDescendenteObjetos(temperaturas);
console.log(temperaturas);
