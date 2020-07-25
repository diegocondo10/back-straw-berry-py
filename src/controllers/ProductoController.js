import Producto from '../models/Producto';
import Categoria from '../models/Categoria';
import { processObject, processQuery } from '../routes/middlewares';

export const createProducto = async (req, res, next) => {
  try {
    const { categoriaId, imagenes, ...rest } = req.body;
    const categoria = await Categoria.findById(categoriaId);
    const producto = new Producto(rest);
    producto.categoria = processObject(categoria);
    producto.imagenes = imagenes;
    await producto.save();
    res.status(200).json({
      ...processObject(producto),
    });
  } catch (error) {
    res.status(400).json({ error: true });
  }
};

export const listarProductos = async (req, res, next) => {
  try {
    const productos = await Producto.find();
    res.status(200).json(processQuery(productos));
  } catch (error) {
    res.status(400).json({ error: true });
  }
};

export const getProductoById = async (req, res, next) => {
  try {
    const producto = await Producto.findById(req.params.id);
    res.status(200).json(processObject(producto));
  } catch (error) {
    res.status(400).json({ error: true });
  }
};
