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

export default AuthRouter;
