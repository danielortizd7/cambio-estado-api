const Resultado = require("../models/resultadoModel"); // Cambiar de Muestra a Resultado

const cambiarEstadoMuestra = async (cedula, idMuestra, nuevoEstado) => {
  const estadosValidos = ["Recibida", "En análisis", "Pendiente de resultados", "Finalizada", "Rechazada"];

  if (!estadosValidos.includes(nuevoEstado)) {
    throw new Error("Estado no válido.");
  }

  // Buscar la muestra en la colección "resultados" en lugar de "muestras"
  const muestra = await Resultado.findOne({ idMuestra });

  console.log("Muestra encontrada:", muestra);

  if (!muestra) {
    throw new Error("Muestra no encontrada.");
  }

  if (muestra.cedulaLaboratorista !== cedula) {
    throw new Error("Acceso denegado. Solo el laboratorista que registró la muestra puede cambiar su estado.");
  }

  // Agregar campo "estado" si no existe
  muestra.estado = nuevoEstado;
  muestra.fechaCambio = new Date();
  await muestra.save();

  return muestra;
};

module.exports = { cambiarEstadoMuestra };
