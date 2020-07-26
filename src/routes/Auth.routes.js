import { Router } from 'express';
import { check } from 'express-validator';
import {
  createAplicacion,
  createPermiso,
  deleteAplicacion,
  getAplicaciones,
  getAplicacionesByIdOrName,
  updateAplicacion,
  getPermisos,
  getPermisoById,
  updatePermiso,
  deletePermiso,
  createRol,
  getRoles,
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
AuthRouter.get('/roles/:_id', getPermisoById);
AuthRouter.put('/roles/:_id', updatePermiso);
AuthRouter.delete('/roles/:_id', deletePermiso);
export default AuthRouter;
