import mongoose from 'mongoose';

const RolSchema = mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  descripcion: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});
const Rol = mongoose.model('Rol', RolSchema);
export default Rol;
