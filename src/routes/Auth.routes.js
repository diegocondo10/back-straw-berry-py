import { Router } from 'express';
import { check } from 'express-validator';
import {
    createAplicacion,
    createPermiso,
    createRol,
    createUsuario,
    deleteAplicacion,
    deletePermiso,
    deleteRol,
    deleteUsuario,
    getAplicacinById,
    getAplicaciones,
    getAplicacionesByIdOrName,
    getPermisoById,
    getPermisos,
    getRolById,
    getRoles,
    getUsuarioById,
    getUsuarios,
    updateAplicacion,
    updatePermiso,
    updateRol,
    updateUsuario,
} from '../controllers/Auth.controller';
import { bodyValidator } from './middlewares';

const AuthRouter = Router();

AuthRouter.post(
    '/aplicaciones/',
    [check('nombre', 'NO SE HA ENVIADO EL NOMBRE').not().isEmpty()],
    bodyValidator,
    createAplicacion,
);

AuthRouter.get('/aplicaciones/', getAplicaciones);
AuthRouter.get('/aplicaciones/:_id', getAplicacinById);
AuthRouter.post('/aplicaciones/listar/', getAplicacionesByIdOrName);

AuthRouter.put('/aplicaciones/:_id', updateAplicacion);
AuthRouter.delete('/aplicaciones/:_id', deleteAplicacion);

//RUTAS DE PERMISOS

AuthRouter.post(
    '/permisos/',
    [check('nombre', 'NO SE HA ENVIADO EL NOMBRE').not().isEmpty()],
    bodyValidator,
    createPermiso,
);
AuthRouter.get('/permisos/', getPermisos);
AuthRouter.get('/permisos/:_id', getPermisoById);
AuthRouter.put('/permisos/:_id', updatePermiso);
AuthRouter.delete('/permisos/:_id', deletePermiso);

//RUTAS DE ROLES
AuthRouter.post(
    '/roles/',
    [
        check('nombre', 'NO SE HA ENVIADO EL NOMBRE').not().isEmpty(),
        check('permisos', 'NO SE HA ENVIADO LOS PERMISOS').not().isEmpty(),
        check('permisos', 'PERMISOS DEBE SER DE TIPO ARRAY').isArray(),
    ],
    bodyValidator,
    createRol,
);

AuthRouter.get('/roles/', getRoles);
AuthRouter.get('/roles/:_id', getRolById);
AuthRouter.put('/roles/:_id', updateRol);
AuthRouter.delete('/roles/:_id', deleteRol);

//RUTAS DE USUARIOS
AuthRouter.post(
    '/usuarios/',
    [
        check('nombre', 'NO SE HA ENVIADO EL NOMBRE').not().isEmpty(),
        check('permisos', 'NO SE HA ENVIADO LOS PERMISOS').not().isEmpty(),
        check('permisos', 'PERMISOS DEBE SER DE TIPO ARRAY').isArray(),
        check('roles', 'NO SE HA ENVIADO LOS PERMISOS').not().isEmpty(),
        check('roles', 'PERMISOS DEBE SER DE TIPO ARRAY').isArray(),
    ],
    bodyValidator,
    createUsuario,
);

AuthRouter.get('/usuarios/', getUsuarios);
AuthRouter.get('/usuarios/:_id', getUsuarioById);
AuthRouter.put('/usuarios/:_id', updateUsuario);
AuthRouter.delete('/usuarios/:_id', deleteUsuario);

export default AuthRouter;
