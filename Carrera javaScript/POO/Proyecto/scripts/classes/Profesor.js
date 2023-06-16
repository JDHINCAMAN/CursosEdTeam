import Usuario from "./Usuario.js"

export default class Profesor extends Usuario {
  // constructor
  constructor(nombre, apellido, edad, sexo, cursosDictados) {
    super(nombre, apellido, edad, sexo);
    this.cursosDictados = cursosDictados;
  }
}
