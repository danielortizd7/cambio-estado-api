const { cambiarEstadoMuestra } = require("../services/cambiarEstadoService");

const actualizarEstado = async (req, res) => {
  try {
    const { cedula, idMuestra, Estado } = req.body;

    if (!cedula || !idMuestra || !Estado) {
      return res.status(400).json({ error: "Cédula, código de muestra y nuevo estado son requeridos." });
    }

    console.log("Datos recibidos:", req.body);

    const muestraActualizada = await cambiarEstadoMuestra(cedula, idMuestra, Estado);
    res.json({ mensaje: "Estado actualizado con éxito", muestra: muestraActualizada });

  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { actualizarEstado };
