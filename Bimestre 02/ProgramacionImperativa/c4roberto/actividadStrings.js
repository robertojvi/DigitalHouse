const prompt = require("prompt-sync")({ sigint: true });


// 1 undefined

// 2 "Ironman"

// 3 "un string cualquiera"


let peliculas = ["star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"]

let peliculasMayusculas = (arr) => {
    let pelisMayusculas = [];
    for (let index = 0; index < arr.length; index++) {
        pelisMayusculas.push(arr[index].toUpperCase());
    }
    return pelisMayusculas;
};

let animadas = ["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"]

let agregaPelis = (arr1, arr2) => {
    let arr1Mayusculas = peliculasMayusculas(arr1)
    let arr2Mayusculas = peliculasMayusculas(arr2)
    for (let index = 0; index < arr2Mayusculas.length; index++) {
        arr1Mayusculas.push(arr2Mayusculas[index]) ;
    }
    return arr1Mayusculas
}

console.log(agregaPelis(peliculas, animadas));

let totalPelis = agregaPelis(peliculas, animadas)
let eliminado = totalPelis.pop()

console.log(totalPelis, eliminado);


const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];

let comparaCalificaciones = (array1, array2) => {
    let comparacion = []
    for (let index = 0; index < array1.length; index++) {
        comparacion.push(array1[index] === array2[index]);
        
    }
    return comparacion
}

console.log(comparaCalificaciones(asiaScores, euroScores));