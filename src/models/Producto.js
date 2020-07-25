import mongoose from 'mongoose';

const ProductoSchema = mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  descripcion: {
    type: String,
    required: true,
    trim: true,
  },
  precio: {
    type: Number,
    required: true,
  },
  descuento: {
    type: Number,
    default: 0,
  },
  aplicarDescuento: {
    type: Boolean,
    default: false,
  },
  verEnWeb: {
    type: Boolean,
    default: true,
  },
  categoria: {
    id: {
      type: mongoose.Types.ObjectId,
    },
    nombre: {
      type: String,
      required: true,
      trim: true,
    },
    descripcion: {
      type: String,
      trim: true,
    },
    createdAt: {
      type: Date,
    },
  },
  imagenes: [
    {
      titulo: {
        type: String,
      },
      descripcion: {
        type: String,
      },
      principal: {
        type: Boolean,
        default: false,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Producto = mongoose.model('Producto', ProductoSchema);
export default Producto;
