import { curso, estudiantes } from './datos.js';
import reporte from './calculos.js';

// Spread de objeto para clonar y sobrescribir el nombre
const nuevo = { ...estudiantes[0], nombre: "Ana María" };

// Spread de arreglo para unir los estudiantes originales con el nuevo
const todos = [...estudiantes, nuevo];

// 1. Mostrar en consola (igual que el original)
console.log(`Curso: ${curso}`);
todos.forEach((estudiante) => {
  console.log(reporte(estudiante));
});

// 2. Mostrar en la página HTML
document.getElementById("titulo-curso").textContent = `Curso: ${curso}`;

const listaReportes = document.getElementById("reportes");
todos.forEach((estudiante) => {
  const li = document.createElement("li");
  li.textContent = reporte(estudiante);
  listaReportes.appendChild(li);
});