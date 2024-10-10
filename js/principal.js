import Cl_estudiante from "./Cl_estudiante.js";
import Cl_becado from "./Cl_becado.js";

let estudiante = new Cl_estudiante();
let becado = new Cl_becado();
let estudiante1 = new Cl_estudiante("Mary",132,8);
let estudiante2 = new Cl_estudiante("Alirio",315,35);

let salida = document.getElementById("salida");

salida.innerHTML=`
Nombre del estudiante: ${estudiante1.nombre}
<br> Acumulado de notas: $${estudiante1.acumnotas}
<br> Cantidad de materias: $${estudiante1.contmaterias}
<br> Nota promedio: ${estudiante1.promedio()}
<br> ${estudiante1.nombre} 
<br> <br>
<br>Nombre del estudiante: ${estudiante2.nombre}
<br> Acumulado de notas: $${estudiante2.acumnotas}
<br> Cantidad de materias: $${estudiante2.contmaterias}
<br>Nota promedio: ${estudiante2.promedio()}
<br> ${estudiante2.nombre}
`