import { Aplicacion, Permiso, Rol, Usuario } from '../models/Auth.models';

export const createAplicacion = async (req, res) => {
    try {
        const aplicacion = new Aplicacion(req.body);
        await aplicacion.save();
        return res.status(201).json(aplicacion);
    } catch (error) {
        console.log(error);
        return res.status(400).json({
            error: true,
        });
    }
};

export const getAplicaciones = async (req, res) => {
    try {
        const aplicaciones = await Aplicacion.find();
        return res.status(200).json(aplicaciones);
    } catch (error) {
        return res.status(400).json({
            error: true,
        });
    }
};

export const getAplicacinById = async (req, res) => {
    try {
        const { _id } = req.params;

        if (!_id) {
            return res.status(400).json({
                error: true,
                message: 'ES NECESARIO ENVIAR EL nombre O EL _id',
            });
        }

        const aplicacion = await Aplicacion.findById(_id);

        return res.status(200).json(aplicacion);
    } catch (error) {
        return res.status(400).json({
            error: true,
        });
    }
};

export const getAplicacionesByIdOrName = async (req, res) => {
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

        return res.status(200).json(aplicaciones);
    } catch (error) {
        return res.status(400).json({
            error: true,
        });
    }
};

export const updateAplicacion = async (req, res) => {
    try {
        const aplicacion = await Aplicacion.updateOne(
            { _id: req.params._id },
            req.body,
        );
        return res.status(200).json(aplicacion);
    } catch (error) {
        console.log(error);
        res.status(400).json({
            error: true,
        });
    }
};

export const deleteAplicacion = async (req, res) => {
    try {
        await Aplicacion.deleteOne({
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

export const createPermiso = async (req, res) => {
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

export const getPermisos = async (req, res) => {
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

export const getPermisoById = async (req, res) => {
    try {
        const permiso = await Permiso.findById(req.params._id).populate(
            'aplicacion',
        );
        res.status(200).json(permiso);
    } catch (error) {
        console.log(error);
        res.status(400).json({
            error: true,
        });
    }
};

export const updatePermiso = async (req, res) => {
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

export const deletePermiso = async (req, res) => {
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

export const createRol = async (req, res) => {
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

export const getRoles = async (req, res) => {
    try {
        const roles = await Rol.find().populate({
            path: 'permisos',
            select: 'nombre',
            populate: {
                path: 'aplicacion',
                select: 'nombre',
            },
        });
        res.status(200).json(roles);
    } catch (error) {
        console.log(error);
        res.status(400).json({
            error: true,
        });
    }
};

export const getRolById = async (req, res) => {
    try {
        const rol = await Rol.findById(req.params._id).populate({
            path: 'permisos',
            select: 'nombre',
            populate: {
                path: 'aplicacion',
                select: 'nombre',
            },
        });
        res.status(200).json(rol);
    } catch (error) {
        console.log(error);
        res.status(400).json({
            error: true,
        });
    }
};

export const updateRol = async (req, res) => {
    try {
        const rol = await Rol.findOneAndUpdate(
            {
                _id: req.params._id,
            },
            req.body,
            { new: true },
        );
        await rol.save();
        return res.status(200).json(rol);
    } catch (error) {
        res.status(400).json({
            error: true,
        });
    }
};

export const deleteRol = async (req, res) => {
    try {
        await Rol.findOneAndRemove({
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

export const createUsuario = async (req, res) => {
    try {
        const usuario = new Usuario(req.body);
        await usuario.save();
        res.status(201).json(usuario);
    } catch (error) {
        res.status(400).json({
            error: true,
        });
    }
};

export const getUsuarios = async (req, res) => {
    try {
        const usuarios = await Usuario.find()
            .populate({
                path: 'permisos',
                select: 'nombre',
                populate: {
                    path: 'aplicacion',
                    select: 'nombre',
                },
            })
            .populate({
                path: 'roles',
                select: 'nombre',
                populate: {
                    path: 'permisos',
                    select: 'nombre',
                },
            });
        res.status(200).json(usuarios);
    } catch (error) {
        console.log(error);
        res.status(400).json({
            error: true,
        });
    }
};

export const getUsuarioById = async (req, res) => {
    try {
        const usuario = await Usuario.findById(req.params._id)
            .populate({
                path: 'permisos',
                select: 'nombre',
                populate: {
                    path: 'aplicacion',
                    select: 'nombre',
                },
            })
            .populate({
                path: 'roles',
                select: 'nombre',
                populate: {
                    path: 'permisos',
                    select: 'nombre',
                },
            });
        res.status(200).json(usuario);
    } catch (error) {
        console.log(error);
        res.status(400).json({
            error: true,
        });
    }
};

export const updateUsuario = async (req, res) => {
    try {
        const usuario = await Usuario.findOneAndUpdate(
            {
                _id: req.params._id,
            },
            req.body,
            { new: true },
        );
        await usuario.save();
        return res.status(200).json(usuario);
    } catch (error) {
        res.status(400).json({
            error: true,
        });
    }
};

export const deleteUsuario = async (req, res) => {
    try {
        await Usuario.findOneAndRemove({
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
