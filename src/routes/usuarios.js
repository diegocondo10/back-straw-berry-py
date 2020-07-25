import { Router } from 'express';
import { check } from 'express-validator';
import {
  crearUsuario,
  listarUsuarios,
  loginUsuarios,
} from '../controllers/UsuarioController';
import { bodyValidator } from './middlewares';

const UsuarioRouter = Router();

UsuarioRouter.post('/listar', bodyValidator, listarUsuarios);

UsuarioRouter.post(
  '/create',
  [
    check('empCodigo', 'No puede estar vacio').not().isEmpty(),
    check('username', 'No puede estar vacio').not().isEmpty(),
    check('password', 'no puede estar vacio').not().isEmpty(),
  ],
  bodyValidator,
  crearUsuario,
);

UsuarioRouter.post(
  '/login',
  [
    check('empCodigo', 'No puede estar vacio').not().isEmpty(),
    check('username', 'No puede estar vacio').not().isEmpty(),
    check('password', 'no puede estar vacio').not().isEmpty(),
  ],
  bodyValidator,
  loginUsuarios,
);

UsuarioRouter.post('/', (req, res) => {
  res.json({ message: 'HOLI :3' });
});

export default UsuarioRouter;
