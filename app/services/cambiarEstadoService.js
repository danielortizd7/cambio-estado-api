const Muestra = require("../models/muestraModel");

const cambiarEstadoMuestra = async (cedula, idMuestra, estado) => {
  const muestra = await Muestra.findOne({ idMuestra });

  if (!muestra) {
    throw new Error("❌ Muestra no encontrada.");
  }

  muestra.estado = estado;
  muestra.fechaCambio = new Date();
  await muestra.save();

  return muestra;
};

module.exports = { cambiarEstadoMuestra };
