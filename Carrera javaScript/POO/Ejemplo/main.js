/**
 * Objetos literales
 */

const NOMBRE = "Juan";
const APELLIDO = "Hincapie";
const EDAD = 19;
const SEXO = "M";
const DIRECCION = "Calle de la Universidad";
const TELEFONO = "+34 678 987654";
const EMAIL = "juan@gmail.com";
const FECHA_NACIMIENTO = new Date("01/01/1990");
const PADRE = {
  nombre: "Efrain",
  apellido: "Hincapie",
  edad: 80,
};
const MADRE = {
  nombre: "Angela",
  apellido: "Manrique",
  edad: 50,
};

const alumno = {
  // Atributos
  nombre: NOMBRE,
  apellido: APELLIDO,
  edad: EDAD,
  sexo: SEXO,
  direccion: DIRECCION,
  telefono: TELEFONO,
  email: EMAIL,
  fechaNacimiento: FECHA_NACIMIENTO,
  padre: PADRE,
  madre: MADRE,

  // Metodos
  mostrarPadre() {
    console.log(this.padre.nombre + " " + this.padre.apellido);
  },
  presentarse() {
    console.log(`Hola, mi nombre es ${this.nombre} ${this.apellido}`);
  },
};

console.log(typeof alumno);
console.log(alumno);
console.log(alumno.padre);
alumno.email = "nverdolaga2003@gmail.com";
console.log(alumno);

alumno.presentarse();

/**
 * Funcion constructora
 */
function Usuario(nombre, apellido, correo, activo) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.correo = correo;
  this.activo = activo;
}

const usuario1 = new Usuario("Juan", "Hincapie", "juan@gmail.com", true);
const usuario2 = new Usuario("Maria", "Beltran", "mari@gmail.com", true);
const usuario3 = new Usuario("Diegui", "Hincapie", "diqgui@gmail.com", true);
console.log(usuario1);
console.log(usuario2);
console.log(usuario3);

/**
 * Clases
 */

class Persona {
  // constructor
  constructor(nombre, apellido, edad, sexo) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.sexo = sexo;
  }

  // getters y setters
  getNombre() {
    return this._nombre;
  }
  setNombre(value) {
    this._nombre = value;
  }

  getApellido() {
    return this._apellido;
  }
  setApellido(value) {
    this._apellido = value;
  }

  getEdad() {
    return this._edad;
  }
  setEdad(value) {
    this._edad = value;
  }

  getSexo() {
    return this._sexo;
  }
  setSexo(value) {
    this._sexo = value;
  }

  // metodo para presentarse
  presentarse() {
    let saludo = `Hola, soy ${this.nombre} ${this.apellido}.`;
    if (this.sexo === "Femenino") {
      saludo += " Soy una mujer ";
    } else {
      saludo += " Soy un hombre ";
    }
    saludo += `de ${this.edad} años. ¡Mucho gusto!`;
    return saludo;
  }
}

const persona1 = new Persona("Juan", "Hincapie", 19, "Masculino");
console.log(persona1.presentarse());

/**
 * Herencia
 */

class Alumno extends Persona {
  // constructor
  constructor(nombre, apellido, edad, sexo, cursosTomados) {
    super(nombre, apellido, edad, sexo);
    this.cursosTomados = cursosTomados;
  }
}

class Profesor extends Persona {
  // constructor
  constructor(nombre, apellido, edad, sexo, cursosDictados) {
    super(nombre, apellido, edad, sexo);
    this.cursosDictados = cursosDictados;
  }
}

// crear objeto de la clase Alumno y Profesor
const alumno1 = new Alumno("Juan", "Hincapie", 19, "Masculino", ["JavaScript", ".NET", "POO"]);
const profesor1 = new Profesor("Maria", "Beltran", 17, "Femenino", ["DB", "JAVA", "Python"]);

console.log(alumno1);
console.log(profesor1);
console.log(alumno1.presentarse());
console.log(profesor1.presentarse());

