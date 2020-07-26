import mongoose from 'mongoose';
import { createUpdateProps } from './BaseObjecProps';
import timestamps from 'mongoose-timestamp';
import { composeWithMongoose } from 'graphql-compose-mongoose';

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
});

AplicacionSchema.plugin(timestamps);
AplicacionSchema.index({ createdAt: 1, updatedAt: 1 });

export const Aplicacion = mongoose.model('Aplicaciones', AplicacionSchema);
export const AplicacionTC = composeWithMongoose(Aplicacion);

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
});
PermisoSchema.plugin(timestamps);
PermisoSchema.index({ createdAt: 1, updatedAt: 1 });
export const Permiso = mongoose.model('Permisos', PermisoSchema);
export const PermisoTC = composeWithMongoose(Permiso);

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
