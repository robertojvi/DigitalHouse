const prompt = require("prompt-sync")({ sigint: true })

// GASTOS MENSUALES

// Variables con valores fijos
const salarioMensual = 3000
const gastosFijos = 1200

// Variables donde se ingresará los valores
let alquiler = Number(prompt("Ingrese el costo del alquiler:"))
let comida = Number(prompt("Ingrese el gasto en comida:"))
let transporte = Number(prompt("Ingrese el gasto en transporte:"))
let necesitaTransporte = true;

// Cálculo del gasto total
let gastoTotal = alquiler + comida + transporte + gastosFijos

// Cálculo del dinero restante después de gastos
let dineroRestante = salarioMensual - gastoTotal

console.log("Resumen de gastos mensuales:")
console.log(`Salario Mensual: $${salarioMensual}`)
console.log(`Gastos Fijos: $${gastosFijos}`)
console.log(`Gasto en Alquiler: $${alquiler}`)
console.log(`Gasto en Comida: $${comida}`)
console.log(`Gasto en Transporte: $${transporte}`)
console.log(`Requiere Transporte: ${necesitaTransporte}`)
console.log(`Gasto Total: $${gastoTotal}`)
console.log(`Dinero Restante: $${dineroRestante}`)



// REGISTRO DE NOTAS 

// Variables con valores fijos
const nombreEstudiante = "Juan Pérez"
const asignatura = "Matemáticas"

// Variables donde se ingresará los valores
let nota1 = Number(prompt("Ingrese la nota del primer examen:"))
let nota2 = Number(prompt("Ingrese la nota del segundo examen:"))
let notaProyecto = Number(prompt("Ingrese la nota del proyecto:"))
let rindeExamen = true

// Cálculo del promedio de notas
const promedio = (nota1 + nota2 + notaProyecto) / 3

console.log("Registro de notas del estudiante:")
console.log(`Nombre del estudiante: ${nombreEstudiante}`)
console.log(`Asignatura: ${asignatura}`)
console.log(`Rinde Examen?: ${rindeExamen}`)
console.log(`Nota del primer examen: ${nota1}`)
console.log(`Nota del segundo examen: ${nota2}`)
console.log(`Nota del proyecto: ${notaProyecto}`)
console.log(`Promedio de notas: ${promedio}`)
