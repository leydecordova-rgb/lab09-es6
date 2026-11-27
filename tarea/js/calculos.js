// Arrow function + parámetro rest (...notas)
export const promedio = (...notas) => {
  const suma = notas.reduce((acc, nota) => acc + nota, 0);
  return suma / notas.length;
};

// Arrow function + parámetro por defecto (minima = 13)
export const estado = (nota, minima = 13) => 
  nota >= minima ? "Aprobado" : "Desaprobado";

// Exportación por defecto + desestructuración ({ nombre, notas }) + spread (...notas) + template literal
const reporte = ({ nombre, notas }) => {
  const prom = promedio(...notas);
  return `${nombre}: ${prom.toFixed(1)} - ${estado(prom)}`;
};

export default reporte;