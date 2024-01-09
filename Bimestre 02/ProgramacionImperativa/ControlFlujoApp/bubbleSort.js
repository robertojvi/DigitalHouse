// Generar una función de ordenamiento en base a bubble sort

let numeros = [6, 5, 1, 2, 4, 3, 8, 7];

let ordenar = (array) => {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[i] < array[j]) {
                let aux = array[i];
                array[i] = array[j];
                array[j] = aux;
            }
        }
    }
    return array;
}

console.log(ordenar(numeros));


let personas = [
	{
		nombre: "Dua",
		apellido: "Lipa",
		ocupacion: "cantante",
		estatura: 173
	},
	{
		nombre: "Ariana",
		apellido: "Grande",
		ocupacion: "cantante",
		estatura: 160
	},
	{
		nombre: "Taylor",
		apellido: "Swift",
		ocupacion: "cantante",
		estatura: 180
	}
];

// ordenar personas por estatura, de menor a mayor
let ordenarPersonas = (array) => {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[i].estatura < array[j].estatura) {
                let aux = array[i];
                array[i] = array[j];
                array[j] = aux;
            }
        }
    }
    return array;
}

console.log(ordenarPersonas(personas));


let ordenaPersonas = (array) => {
	for (let i = 0; i < array.length; i++) {
		for (let j = 0; j < array.length - 1; j++) {
			if (array[j].estatura > array[j+1].estatura) {
				let tempVal = array[j]
				array[j] = array[j+1]
				array[j+1] = tempVal
			}
		}
		
	}
	return array;
}

console.log(ordenaPersonas(personas));



// Necesitamos enviarle un diploma a los alumnos que están aprobados y un e-mail a los alumnos desaprobados para acordar un recuperatorio. Por lo tanto, necesitamos dos listas: una lista que almacene todos los aprobados y otra los desaprobados. Deberemos guardarlos en las variables aprobados y desaprobados respectivamente.
let estudiantes = [
    {nombre: 'John', promedio: 8.5, aprobado: true},
    {nombre: 'Jane', promedio: 7, aprobado: true},
    {nombre: 'June', promedio: 3, aprobado: false},
]

let aprobados = estudiantes.filter(function(numero){
	if(numero.aprobado){
		return numero;
	}
})

let desaprobados = estudiantes.filter(function(numero){
	if(!numero.aprobado){
		return numero;
	}
})

console.log(aprobados);
console.log(desaprobados);






// Create a function called randomRange that takes a range myMin and myMax and returns a random whole number that's greater than or equal to myMin and less than or equal to myMax.

function randomRange(myMin, myMax) {
    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}

console.log(randomRange(1, 10));

// Use parseInt() in the convertToInteger function so it converts the input string str into an integer, and returns it.

function convertToInteger(str) {
    return parseInt(str);
}

console.log(convertToInteger('10'));

// Use parseInt() in the convertToInteger function so it converts a binary number to an integer and returns it.

function convertToInteger(str) {
    return parseInt(str, 2);
}

console.log(convertToInteger('1010101010101010101'));



// We have defined a function called countdown with one parameter (n). The function should use recursion to return an array containing the integers n through 1 based on the n parameter. If the function is called with a number less than 1, the function should return an empty array. For example, calling this function with n = 5 should return the array [5, 4, 3, 2, 1]. Your function must use recursion by calling itself and must not use loops of any kind.

function countdown(n) {
    if (n < 1) {
        return [];
    }
    return [n].concat(countdown(n - 1));
}

console.log(countdown(5));

// We have defined a function named rangeOfNumbers with two parameters. The function should return an array of integers which begins with a number represented by the startNum parameter and ends with a number represented by the endNum parameter. The starting number will always be less than or equal to the ending number. Your function must use recursion by calling itself and not use loops of any kind. It should also work for cases where both startNum and endNum are the same.

function rangeOfNumbers(startNum, endNum) {
    if (startNum > endNum) {
        return [];
    }
    return [startNum].concat(rangeOfNumbers(startNum + 1, endNum));
}





// función bubble sort ascendente

function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

// función bubble sort descendente

function bubbleSortDesc(arr)