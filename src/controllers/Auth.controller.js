import { Aplicacion, Permiso, Rol } from '../models/Auth.models';

export const createAplicacion = async (req, res, next) => {
  try {
    const aplicacion = new Aplicacion(req.body);
    await aplicacion.save();
    res.status(201).json(aplicacion);
  } catch (error) {
    console.log(error);
    res.status(400).json({
      error: true,
    });
  }
};

export const getAplicaciones = async (req, res, next) => {
  try {
    const aplicaciones = await Aplicacion.find();
    return res.status(200).json(aplicaciones);
  } catch (error) {
    return res.status(400).json({
      error: true,
    });
  }
};

export const getAplicacionesByIdOrName = async (req, res, next) => {
  try {
    const { _id, nombre } = req.body;

    if (!_id && !nombre) {
      return res.status(400).json({
        error: true,
        message: 'ES NECESARIO ENVIAR EL nombre O EL _id',
      });
    }
    let aplicaciones = [];

    if (_id) {
      const aplicacion = await Aplicacion.findById(_id);
      aplicaciones.push(aplicacion);
    } else {
      aplicaciones = await Aplicacion.find({
        //nombre: new RegExp(`^${nombre}$`, 'i'),
        nombre: new RegExp(`${nombre}`, 'i'),
      });
    }

    res.status(200).json(aplicaciones);
  } catch (error) {
    res.status(400).json({
      error: true,
    });
  }
};

export const updateAplicacion = async (req, res, next) => {
  try {
    const aplicacion = await Aplicacion.findOneAndUpdate(
      {
        _id: req.params._id,
      },
      req.body,
      { new: true },
    );
    await aplicacion.save();
    return res.status(200).json(aplicacion);
  } catch (error) {
    res.status(400).json({
      error: true,
    });
  }
};

export const deleteAplicacion = async (req, res, next) => {
  try {
    await Aplicacion.findOneAndRemove({
      _id: req.params._id,
    });
    res.status(200).json({
      message: 'SE HA ELIMINADO CORRECTAMENTE',
    });
  } catch (error) {
    res.status(400).json({
      error: true,
    });
  }
};

export const createPermiso = async (req, res, next) => {
  try {
    const permiso = new Permiso(req.body);
    await permiso.save();
    res.status(201).json(permiso);
  } catch (error) {
    res.status(400).json({
      error: true,
    });
  }
};

export const getPermisos = async (req, res, next) => {
  try {
    const permisos = await Permiso.find().populate('aplicacion');
    res.status(200).json(permisos);
  } catch (error) {
    console.log(error);
    res.status(400).json({
      error: true,
    });
  }
};

export const getPermisoById = async (req, res, next) => {
  try {
    const permiso = await Permiso.findById(req.params._id).populate('aplicacion');
    res.status(200).json(permiso);
  } catch (error) {
    console.log(error);
    res.status(400).json({
      error: true,
    });
  }
};

export const updatePermiso = async (req, res, next) => {
  try {
    const permiso = await Permiso.findOneAndUpdate(
      {
        _id: req.params._id,
      },
      req.body,
      { new: true },
    );
    await permiso.save();
    return res.status(200).json(permiso);
  } catch (error) {
    res.status(400).json({
      error: true,
    });
  }
};

export const deletePermiso = async (req, res, next) => {
  try {
    await Permiso.findOneAndRemove({
      _id: req.params._id,
    });
    res.status(200).json({
      message: 'SE HA ELIMINADO CORRECTAMENTE',
    });
  } catch (error) {
    res.status(400).json({
      error: true,
    });
  }
};

export const createRol = async (req, res, next) => {
  try {
    const rol = new Rol(req.body);
    await rol.save();
    res.status(201).json(rol);
  } catch (error) {
    res.status(400).json({
      error: true,
    });
  }
};

export const getRoles = async (req, res, next) => {
  try {
    const roles = await Rol.find()
      .populate('permisos')
      .populate('permisos.aplicacion');
    res.status(200).json(roles);
  } catch (error) {
    console.log(error);
    res.status(400).json({
      error: true,
    });
  }
};
