const prompt = require("prompt-sync")({ sigint: true });

function esImpar(num) {
  if (num % 2 != 0) {
    return console.log("¿Sabías que tu edad es impar?");
  } else {
    return "";
  }
}

//FUNCION ACCESO A BAR

function puedePasar() {
  let edad = Number(prompt("Ingrese su edad: "));

  if (edad < 0) {
    return console.log(
      "Error, edad inválida. Por favor ingrese un número válido."
    );
  } else if (edad < 18) {
    esImpar(edad);
    return console.log("No puede pasar al bar.");
  } else if (edad < 21) {
    esImpar(edad);
    return console.log("Puede pasar al bar, pero no puede tomar alcohol.");
  } else if (edad === 21) {
    esImpar(edad);
    return console.log(
      "Ha llegado a la mayoría de edad. Puede pasar al bar y tomar alcohol."
    );
  } else {
    esImpar(edad);
    return console.log("Puede pasar al bar y tomar alcohol");
  }
}

// console.log(puedePasar());

//FUNCION TOTAL A PAGAR
function totalAPagar() {
  let vehiculo = prompt("Ingrese el tipo de vehículo (coche, moto o autobus: ");
  let litrosConsumidos = Number(prompt("Ingrese los litros consumidos: "));
  let precioPorLitro = 0;
  let totalCuenta = 0;
  switch (vehiculo) {
    case "coche":
      precioPorLitro = 86;
      totalCuenta = litrosConsumidos * precioPorLitro;
      if (litrosConsumidos <= 25) {
        totalCuenta += 50;
      } else {
        totalCuenta += 25;
      }
      return totalCuenta;
      break;
    case "moto":
      precioPorLitro = 70;
      totalCuenta = litrosConsumidos * precioPorLitro;
      if (litrosConsumidos <= 25) {
        totalCuenta += 50;
      } else {
        totalCuenta += 25;
      }
      return totalCuenta;
      break;
    case "autobus":
      precioPorLitro = 55;
      totalCuenta = litrosConsumidos * precioPorLitro;
      if (litrosConsumidos <= 25) {
        totalCuenta += 50;
      } else {
        totalCuenta += 25;
      }
      return totalCuenta;
      break;
  }
}

// console.log(totalAPagar("coche", 10));

//FUNCION LOCAL DE SANDWICHES
function precioSandwich() {
  let sandwichBase = prompt(
    "Escoja el sandwich base: Pollo = $150 (“pollo”), Carne = $200 (“carne”), Vegetariano (verduras asadas) = $100 (“veggie”): "
  );
  let precioBase = 0;
  switch (sandwichBase) {
    case "pollo":
      precioBase = 150;
      break;
    case "carne":
      precioBase = 200;
      break;
    case "veggie":
      precioBase = 100;
      break;
    default:
      // Manejar un caso base desconocido si es necesario
      return "Tipo de sándwich base desconocido";
  }

  let tipoPan = prompt(
    "Escoja un tipo de pan: Blanco c/orégano y parmesano = $50 (“blanco”), Negro c/avena = $60 (“negro”), Sin gluten = $75 (“s/gluten”): "
  );
  let precioPan = 0;
  switch (tipoPan) {
    case "blanco":
      precioPan = 50;
      break;
    case "negro":
      precioPan = 60;
      break;
    case "s/gluten":
      precioPan = 75;
      break;
    default:
      // Manejar un caso de pan desconocido si es necesario
      return "Tipo de pan desconocido";
  }

  let precioAdicionales = 0;
  let queso = false;
  let tomate = false;
  let lechuga = false;
  let cebolla = false;
  let mayonesa = false;
  let mostaza = false;

  let adicionalQueso = prompt("Queso adicional $20?: S/N: ");
  if (adicionalQueso === "S") {
    queso = true;
    precioAdicionales += 20;
  }
  let adicionalTomate = prompt("Tomate adicional $15?: S/N: ");
  if (adicionalTomate === "S") {
    tomate = true;
    precioAdicionales += 15;
  }
  let adicionalLechuga = prompt("Lechuga adicional $10?: S/N: ");
  if (adicionalLechuga === "S") {
    lechuga = true;
    precioAdicionales += 10;
  }
  let adicionalCebolla = prompt("Cebolla adicional $15?: S/N: ");
  if (adicionalCebolla === "S") {
    cebolla = true;
    precioAdicionales += 15;
  }
  let adicionalMayonesa = prompt("Mayonesa adicional $5?: S/N: ");
  if (adicionalMayonesa === "S") {
    mayonesa = true;
    precioAdicionales += 5;
  }
  let adicionalMostaza = prompt("Mostaza adicional $5?: S/N: ");
  if (adicionalMostaza === "S") {
    mostaza = true;
    precioAdicionales += 5;
  }

  return precioBase + precioPan + precioAdicionales;
}

// console.log(precioSandwich());

//Extra Bonus

//Número Secreto

function numSecreto(){
  let numero = Number(prompt("Ingrea un número del 1 al 10 y encuentra el secreto: "))
  let secreto = Math.floor(Math.random()*10)
  return numero === secreto ? `Felicidades tu número ${numero} es igual al secreto ${secreto}` : `Lo siento tu número ${numero} no es igual al secreto ${secreto}`
}

// console.log(numSecreto());

//Abrir paracaidas

function abrirParacaidas(){
  let velocidad = Number(prompt("Ingrese la velocidad: "))
  let altura = Number(prompt("Ingrese la altura: "))
  if (velocidad < 1000){
    if (altura <= 3000 && altura >= 2000) {
      return "Se abre el paracaídas :)"
    } else {
      return "No se puede abrir el paracaídas :("
    }
  } else {
    return "No se puede abrir el paracaídas :("
  }

}

// console.log(abrirParacaidas());

//Traductor

function traductor(){
  let palabra = prompt("Ingresa una palabra casa, perro, pelota, árbol, genio...:") 
  switch (palabra) {
    case "casa":
      return "house"
      break;
    case "perro":
      return "dog"
      break;
    case "pelota":
      return "ball"
      break;
    case "árbol":
      return "tree"
      break;
    case "genio":
      return "genius"
      break;
    default:
      return "La palabra ingresada es incorrecta"
      break;
  }
}

// console.log(traductor());

//Valoración Películas
function valoraPeli(){
  let valoracion = prompt("Valora la peli que acabas de ver: (Muy mala, Mala, Mediocre, Buena, Muy Buena)")
  switch (valoracion) {
    case "Muy mala":
      return "Calificaste la película como Muy mala. Lo lamentamos mucho. Gracias por tu valoración."
      break;
    case "Mala":
      return "Calificaste la película como Mala. Lo lamentamos mucho. Gracias por tu valoración."
      break;
    case "Mediocre":
      return "Calificaste la película como Mediocre. Lo lamentamos mucho. Gracias por tu valoración."
      break;
    case "Buena":
      return "Calificaste la película como Buena. Gracias por tu valoración."
      break;
    case "Muy buena":
      return "Calificaste la película como Muy buena. Lo agradecemos. Gracias por tu valoración."
      break;
    default:
      return "Ingresaste un valor inválido"
      break;
  }
}

// console.log(valoraPeli());
