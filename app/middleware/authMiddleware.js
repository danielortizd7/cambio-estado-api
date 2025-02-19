
const laboratoristas = ["11223344", "87654321", "12345678"];

const authMiddleware = (req, res, next) => {
  const { cedula } = req.body;
  if (!laboratoristas.includes(cedula)) {
    return res.status(403).json({ error: "Acceso denegado. Solo laboratoristas pueden cambiar estados." });
  }
  next();
};

module.exports = authMiddleware;
