import mongoose from 'mongoose';

const ImagenProductoSchema = mongoose.Schema({
  titulo: {
    type: String,
    trim: true,
  },
  descripcion: {
    type: String,
    trim: true,
  },
  url: {
    type: String,
  },
  principal: {
    type: Boolean,
  },
});

const ImagenProducto = mongoose.model('ImagenProducto', ImagenProductoSchema);

export default ImagenProducto;
