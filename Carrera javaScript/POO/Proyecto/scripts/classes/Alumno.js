import Usuario from "./Usuario.js"

export default class Alumno extends Usuario {
  // constructor
  constructor(nombre, apellido, edad, sexo, cursosTomados) {
    super(nombre, apellido, edad, sexo);
    this.cursosTomados = cursosTomados;
  }
}
