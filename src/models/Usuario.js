import mongoose from 'mongoose';

const UsuarioSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  roles: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Rol' }],
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});
const Usuario = mongoose.model('Usuario', UsuarioSchema);
export default Usuario;
