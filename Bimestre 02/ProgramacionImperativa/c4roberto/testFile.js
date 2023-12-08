// Función que separa un string en un arreglo de caracteres
let split = (string) => {
    let stringSplit = []
    for (let index = 0; index < string.length; index++) {
        stringSplit.push(string[index]);
    }
    return stringSplit
}

// Función que toma un númer entero y lo convierte a número binario
let enteroABinario = (numero) => {
    let binario = []
    for (let index = 0; index < 8; index++) {
        binario.push((numero % 2));
    }
    return binario.reverse().join("")
}

// Función que valida un correo electrónico
let validateEmail = (email) => {
    let emailValido = false
    for (let index = 0; index < email.length; index++) {
        if (email[index] === "@") {
            emailValido = true
        }
    }
    return emailValido
}

// Función para generar una contrasena aleatoria
let contrasenaAleatoria = (longitud) => {
    let contrasena = [] // arreglo vacía
    let caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
    for (let index = 0; index < longitud; index++) {
        contrasena.push(caracteres.charAt(Math.floor(Math.random() * caracteres.length)))
    }
    return contrasena.join("")  
}