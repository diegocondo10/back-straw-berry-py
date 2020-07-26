import mongoose from 'mongoose';
import { createUpdateProps } from './BaseObjecProps';

const AplicacionSchema = mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  descripcion: {
    type: String,
    trim: true,
  },
  ...createUpdateProps,
});

export const Aplicacion = mongoose.model('Aplicaciones', AplicacionSchema);

const PermisoSchema = mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    trim: true,
  },

  descripcion: {
    type: String,
    trim: true,
  },

  aplicacion: {
    type: mongoose.Types.ObjectId,
    ref: 'Aplicaciones',
  },
  ...createUpdateProps,
});

export const Permiso = mongoose.model('Permisos', PermisoSchema);

const RolSchema = mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    trim: true,
  },

  descripcion: {
    type: String,
    trim: true,
  },

  permisos: [
    {
      type: mongoose.Types.ObjectId,
      ref: 'Permisos',
    },
  ],
  ...createUpdateProps,
});

export const Rol = mongoose.model('Roles', RolSchema);

const UsuarioSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },

  roles: [
    {
      type: mongoose.Types.ObjectId,
      ref: 'Roles',
    },
  ],
  permisos: [
    {
      type: mongoose.Types.ObjectId,
      ref: 'Permisos',
    },
  ],
  ...createUpdateProps,
});

export const Usuario = mongoose.model('Usuarios', UsuarioSchema);
