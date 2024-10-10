import Cl_estudiante from "./Cl_estudiante.js";
export default class Cl_becado extends Cl_estudiante {
    constructor(nombre, acumnotas, contmaterias){
        super(nombre,acumnotas,contmaterias);
    }
    beca(){
        if(this.promedio() > 15)
            return "recibe una beca de 30";
        else
        if(this.promedio() >= 10)
            return "recibe una beca de 20";
        else
        if(this.promedio() < 10)
            return "no le corresponde beca";
    }
}