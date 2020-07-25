import mongoose from 'mongoose';

const PageSchema = mongoose.Schema({
  page: {
    type: String,
    required: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});
const Pagina = mongoose.model('Pagina', PageSchema);
export default Pagina;
