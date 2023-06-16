export default class Curso {
  constructor(nombre, poster, clases) {
    this.nombre = nombre;
    this.poster = poster;
    this.clases = clases;
    this.inscritos = [];
  }

  getNombre() {
    return this.nombre;
  }

  setNombre(nuevoNombre) {
    this.nombre = nuevoNombre;
  }

  getPoster() {
    return this.poster;
  }

  setPoster(nuevoPoster) {
    this.poster = nuevoPoster;
  }

  getClases() {
    return this.clases;
  }

  setClases(nuevasClases) {
    this.clases = nuevasClases;
  }

  getInscritos() {
    return this.inscritos;
  }

  setInscritos(nuevosInscritos) {
    this.inscritos = nuevosInscritos;
  }
}
