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

// ordenar la colección, de menor a mayor, considerando solo la estatura usando bubble sort

let ordenar = (personas) => {

    for (let i = 0; i < personas.length; i++) {
        for (let j = 0; j < personas.length; j++) {
            if (personas[i].estatura < personas[j].estatura) {
                let aux = personas[i];
                personas[i] = personas[j];
                personas[j] = aux;
            }
        }
    }

}

ordenar(personas);
console.log(personas);

