import { Router } from 'express';
import { check } from 'express-validator';
import {
  buscarCategoriaById,
  crearCategoria,
  editarCategoria,
  listarCategorias,
  eliminarCategoria,
} from '../controllers/CategoriasController';
import { bodyValidator } from './middlewares';

const CategoriaRouter = Router();

CategoriaRouter.post(
  '/',
  [check('nombre', 'No se ha enviado el nombre').not().isEmpty()],
  bodyValidator,
  crearCategoria,
);

CategoriaRouter.put(
  '/:id',
  [check('nombre', 'No se ha enviado el nombre').not().isEmpty()],
  bodyValidator,
  editarCategoria,
);

CategoriaRouter.delete('/:id', eliminarCategoria);

CategoriaRouter.get('/', listarCategorias);

CategoriaRouter.get('/:id', buscarCategoriaById);

export default CategoriaRouter;
