//la lista de clientes.
let arrayCuentas = [
    {
        nroCuenta: 5486273622,
        tipoDeCuenta: "Cuenta Corriente",
        saldoEnPesos: 27771,
        titularCuenta: "Abigael Natte",
    },
    {
        nroCuenta: 1183971869,
        tipoDeCuenta: "Caja de Ahorro",
        saldoEnPesos: 8675,
        titularCuenta: "Ramon Connell",
    },
    {
        nroCuenta: 9582019689,
        tipoDeCuenta: "Caja de Ahorro",
        saldoEnPesos: 27363,
        titularCuenta: "Jarret Lafuente",
    },
    {
        nroCuenta: 1761924656,
        tipoDeCuenta: "Cuenta Corriente",
        saldoEnPesos: 32415,
        titularCuenta: "Ansel Ardley",
    },
    {
        nroCuenta: 7401971607,
        tipoDeCuenta: "Cuenta Unica",
        saldoEnPesos: 18789,
        titularCuenta: "Jacki Shurmer",
    },
];
// podes continuar tu codigo a partir de aca!

let banco = {
    clientes: arrayCuentas,
    consultarCliente: function (titular) {
        for (let i = 0; i < this.clientes.length; i++) {
            if (this.clientes[i].titularCuenta === titular) {
                return this.clientes[i];
            }
        }
        return `Lo siento, el cliente ${titular} no está registrado.`
    },
    deposito: function (titular, cantidadDinero) {
        this.consultarCliente(titular).saldoEnPesos += cantidadDinero;
        console.log(
            `Depósito realizado, su nuevo saldo es: ${this.consultarCliente(titular).saldoEnPesos
            }`
        );
    },
    extraccion: function (titular, montoAExtraer) {
        if (this.consultarCliente(titular).saldoEnPesos > montoAExtraer) {
            this.consultarCliente(titular).saldoEnPesos -= montoAExtraer;
            console.log(
                `Extracción realizada correctamente, su nuevo saldo es: ${this.consultarCliente(titular).saldoEnPesos
                }`
            );
        } else {
            console.log("Fondos insuficientes");
        }
    },
};

//console.log(banco.consultarCliente("Ansel Ardley"));
banco.deposito("Jacki Shurmer", 10000000);
banco.extraccion("Jacki Shurmer", 10000000);

function propiedadUnica(arr, propiedad) {
    const resultado = [];

    for (let i = 0; i < arr.length; i++) {
        const objeto = {};
        objeto[propiedad] = arr[i][propiedad];
        resultado.push(objeto);
    }

    return resultado;
}
let array = [ { nombre: "Lean", edad: 27 }, { nombre: "Eze", edad: 49 } ];

const resultadoEdad = propiedadUnica(array, "edad");
console.log(resultadoEdad); // Debería mostrar: [ { edad: 27 }, { edad: 49 } ]

const resultadoNombre = propiedadUnica(array, "nombre");
console.log(resultadoNombre); // Debería mostrar: [ { nombre: "Lean" }, { nombre: "Eze" } ]


// revisar
let alumno = {
    nombre: "",
    numeroLegajo: 0,
    listaNotas: [],
    promedio: function(){
        let acc = 0
        for (let i = 0; i < array.length; i++) {
            acc += this.listaNotas[i];
        }
        return acc / this.listaNotas.length
    },
    aprueba: function(notaAprobacion){
        if (this.promedio > notaAprobacion) {
            return console.log(`El alumno ${this.nombre} ha aprobado con ${this.promedio}`);
            
        }
    }
}