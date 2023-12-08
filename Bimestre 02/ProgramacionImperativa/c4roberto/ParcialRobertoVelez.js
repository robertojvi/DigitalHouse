//Ejercicio 1
let restarPares = (numero1, numero2) => {
    if (numero1 % 2 === 0 && numero2 % 2 === 0) {
        return numero1 - numero2;
    } else {
        return "Lo siento, uno o mas parámetros no son pares";
    }
}

console.log(restarPares(2, 4));

//Ejercicio 2

let controlEntradaRecital = (edad, tieneEntrada) => {
    if (tieneEntrada === true && edad >= 18) {
        return true;
    } else if (tieneEntrada === true && edad < 18) {
        return "Solo puedes acceder con un adulto mayor";
    } else {
        return false;
    }
}

console.log(controlEntradaRecital(28, true));


//Ejercicio 3

let productos = [
    {
        producto: "remera",
        tipo: "indumentaria",
        precio: 2100
    },
    {
        producto: "notebook",
        tipo: "tecnologia",
        precio: 200000
    },
    {
        producto: "celular",
        tipo: "tecnologia",
        precio: 27000
    },
    {
        producto: "protector solar",
        tipo: "cosmetica",
        precio: 2500
    },
    {
        producto: "pantalon",
        tipo: "indumentaria",
        precio: 7500
    },
    {
        producto: "tablet",
        tipo: "tecnologia",
        precio: 60000
    },

]

let filtrarProductos = (arreglo) => {
    let arregloFiltrado = []
    for (let index = 0; index < arreglo.length; index++) {
        if (arreglo[index].tipo === "tecnologia" && arreglo[index].precio >= 50000) {
            arregloFiltrado.push(arreglo[index])
        }
    }
    return arregloFiltrado
}

console.log(filtrarProductos(productos));