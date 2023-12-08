// ANCHOR ---> IF -- TERNARIO -- SWITCH CASE

// vendedor --> tiene acceso a casi todo
// comprador --> tiene muy poco acceso
// admin ---> tiene acceso a absolutamente todo

const verificarPermisos = (rol) => {
  let permiso = "";

  if (rol === "vendedor") {
    permiso = "tiene acceso a casi todo";
  } else if (rol === "admin") {
    permiso = "tiene acceso a absolutamente todo";
  } else {
    permiso = "tiene muy poco acceso";
  }

  return permiso;
};

let tienePermiso = verificarPermisos("admin");
console.log(tienePermiso);

// clima es lluvioso --> si , llevalo
// clima no es lluvioso --> no, no hace falta

const salgoConParaguas = (clima) =>
  clima === "lluvioso" ? "si, llevalo" : "no, no hace falta";

let res = salgoConParaguas("lluvioso");
console.log(res);

// SWITCH CASE

// impuesto ---> 200

// audi 10
// vw 20
// bmw 30
// fiat 40

const calcularImpuesto = (marca) => {
  let impuesto = 200;

  switch (marca) {
    case "audi":
      impuesto = impuesto + 10;
      break;
    case "vw":
      impuesto = impuesto + 20;
      break;
    case "bwm":
      impuesto = impuesto + 30;
      break;
    default: 
        impuesto = "Tu auto esta excento!"
  }


  return impuesto

};
