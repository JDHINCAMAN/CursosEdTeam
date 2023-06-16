export default class Usuario {
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




