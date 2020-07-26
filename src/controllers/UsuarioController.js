import Usuario from '../models/Usuario';

export const crearUsuario = async (req, res, next) => {
  try {
    const usuario = new Usuario(req.body);
    await usuario.save();
    res.status(200).json({
      transaccion: true,
      data: usuario,
    });
  } catch (e) {
    res.status(400).json({ error: true });
  }
};

export const listarUsuarios = async (req, res, next) => {
  res.status(200).json({
    transaccion: true,
    data: [],
  });
};

export const loginUsuarios = async (req, res, next) => {
  res.status(200).json({
    transaccion: true,
  });
};
/*
  req: Request
  res: Response
  next: continuar a la siguiente funcion
*/
export const listarAlumnosByDocente = async (req, res, next) => {};
