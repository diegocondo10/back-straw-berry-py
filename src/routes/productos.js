import { Router } from 'express';
import { check } from 'express-validator';
import {
  createProducto,
  listarProductos,
  getProductoById,
} from '../controllers/ProductoController';
import { bodyValidator } from './middlewares';

const ProductoRouter = Router();

ProductoRouter.post(
  '/',
  [
    check('nombre', 'No se ha enviado el nombre').not().isEmpty(),
    check('precio', 'No se ha enviado el precio').not().isEmpty(),
    check('descripcion', 'No se ha enviado la descripcion').not().isEmpty(),
    check('categoriaId', 'No se ha enviado la descripcion').not().isEmpty(),
    check('imagenes', 'No se han enviado las imagenes').not().isEmpty(),
  ],
  bodyValidator,
  createProducto,
);

ProductoRouter.get('/', listarProductos);
ProductoRouter.get('/:id', getProductoById);

export default ProductoRouter;
