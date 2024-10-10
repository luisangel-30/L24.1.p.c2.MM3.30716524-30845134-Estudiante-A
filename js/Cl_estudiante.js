export default class Cl_estudiante {
    constructor(nombre, acumnotas,contmaterias){
        this.nombre = nombre;
        this.acumnotas = acumnotas;
        this.contmaterias = contmaterias;
    }
    promedio() {
       return this.acumnotas / this.contmaterias;
    }
}