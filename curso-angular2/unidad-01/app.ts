
function saludar(nombre:string) {
  console.log("Hola " + nombre.toUpperCase());
}

var wolverine = {
  nombre:"Logan"
};

saludar(wolverine.nombre);

let nombre:string = "Ricardo Tapia";
let edad:number = 23;
const PERSONAJE: {nombre:string, edad:number} = {
  nombre : nombre,
  edad: edad
};

interface Batman {
  nombre:string;
  artesMarciales: string[]
}

let batman:Batman = {
  nombre: "Bruno Díaz",
  artesMarciales: ["Karate", "Aikido", "Wing Chun"]
}

let resultado = (a:number, b:number) => (a + b) * 2;

function getAvenger(nombre:string, poder?:string, arma:string="arco") {
  let mensaje;
  if(poder) {
    mensaje = `${nombre} tiene le pode de: ${poder} y un arma ${arma}`;
  } else {
    mensaje = `${nombre} tiene un ${poder}`;
  }
}


class Rectangulo {
  base:number;
  alutra:number;
  calcularArea():number {
    return this.base * this.alutra;
  }
}
