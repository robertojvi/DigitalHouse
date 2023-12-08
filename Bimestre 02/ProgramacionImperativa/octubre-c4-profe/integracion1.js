let arrayCuentas = [
  {
    nroCuenta: 5486273622,
    tipoDeCuenta: "Cuenta Corriente",
    saldoEnPesos: 27771,
    titularCuenta: "pepito",
  },
  {
    nroCuenta: 1183971869,
    tipoDeCuenta: "Caja de Ahorro",
    saldoEnPesos: 8675,
    titularCuenta: "maria",
  },
  {
    nroCuenta: 9582019689,
    tipoDeCuenta: "Caja de Ahorro",
    saldoEnPesos: 27363,
    titularCuenta: "juancito",
  },
  {
    nroCuenta: 1761924656,
    tipoDeCuenta: "Cuenta Corriente",
    saldoEnPesos: 32415,
    titularCuenta: "carmen",
  },
  {
    nroCuenta: 7401971607,
    tipoDeCuenta: "Cuenta Unica",
    saldoEnPesos: 18789,
    titularCuenta: "Jack",
  },
];

let banco = {
  clientes: arrayCuentas,
  consultarCliente: function (titular) {
    for (let i = 0; i < this.clientes.length; i++) {
      if (this.clientes[i].titularCuenta === titular) {
        return this.clientes[i];
      }
    }

    return `lo siento, el cliente ${titular} no existe`;
  },
  deposito: function (titular, cantidad) {
    let cliente = this.consultarCliente(titular); // {} - ""

    if (typeof cliente === "object") {
      cliente.saldoEnPesos += cantidad;
      return `Deposito realiado con exito, su nuevo saldo es: ${cliente.saldoEnPesos} `;
    } else {
      return "lo siento, no se pudo realizar el deposito";
    }
  },
  extraccion: function (titular, cantidad) {
    let cliente = this.consultarCliente(titular); // {} - ""
    if (typeof cliente === "object") {

        if( cliente.saldoEnPesos >= cantidad ){
            cliente.saldoEnPesos -= cantidad
            return `Extraccion realizado con exito, su cuenta quedo en ${cliente.saldoEnPesos}`
        }else{
            return "Saldo insuficiente"
        }

    } else {
      return "lo siento no se pudo realizar la extraccion por que no se encontro el cliente";
    }
  },
};

let clienteEncontrado = banco.consultarCliente("oscar");
console.log(clienteEncontrado);

let ticket = banco.deposito("carmen", 10000);
console.log(ticket);

let ticket2 = banco.extraccion("juancito", 250000);
console.log(ticket2)




let persona = {
    nombre :"marta",
    edad: 22
}

// dot
// console.log( persona."edad" )
console.log( persona.edad )
persona.apellido = "perez"

// bracket
console.log( persona["edad"] )
persona["nombre completo"] = "marta perez"



// quiero una funcion que reciba por parametro la propiedad qeu quiero mostrar de un objeto


const mostrarPropiedad = ( objeto,  laPropiedad )=>{
    return objeto[laPropiedad]
}

let x = mostrarPropiedad( persona , "edad")
console.log( x )

console.log(persona)