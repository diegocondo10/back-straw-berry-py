import Categoria from '../models/Categoria';
import { processObject, processQuery } from '../routes/middlewares';

export const crearCategoria = async (req, res, next) => {
  try {
    console.log(req.body);
    const categoria = new Categoria(req.body);
    await categoria.save();
    res.status(201).json(categoria);
  } catch (e) {
    console.log(e);
    res.status(400).json({ error: true, data: e });
  }
};

export const editarCategoria = async (req, res, next) => {
  try {
    const categoria = await Categoria.findOne({ nombre: res.nombre });

    if (!categoria) {
      const newCategoria = await Categoria.findByIdAndUpdate(
        { _id: req.params.id },
        req.body,
      );
      newCategoria.save();
      res.status(200).json(newCategoria);
    } else {
      res
        .status(400)
        .json({ error: true, message: 'YA HAY UNA CATEGORIA CON ESA INFORMACION' });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: true });
  }
};

export const listarCategorias = async (req, res, next) => {
  const categorias = await Categoria.find();
  res.status(200).json(processQuery(categorias));
};

export const buscarCategoriaById = async (req, res, next) => {
  const categoria = await Categoria.findById(req.params.id);
  res.status(200).json(processObject(categoria));
};

export const eliminarCategoria = async (req, res, next) => {
  await Categoria.findByIdAndRemove(req.params.id);
  res.status(200).json({ message: 'Se ha eliminado correctamente' });
};
