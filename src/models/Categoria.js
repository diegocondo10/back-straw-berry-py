import mongoose from 'mongoose';

const CategoriaSchema = mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  descripcion: {
    type: String,
    trim: true,
    default: 'NO REGISTRA',
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});
const Categoria = mongoose.model('Categoria', CategoriaSchema);
export default Categoria;
