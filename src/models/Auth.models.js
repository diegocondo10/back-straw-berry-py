import mongoose from 'mongoose';
import timestamps from 'mongoose-timestamp';

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
});
RolSchema.plugin(timestamps);
RolSchema.index({ createdAt: 1, updatedAt: 1 });
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
});
UsuarioSchema.plugin(timestamps);
UsuarioSchema.index({ createdAt: 1, updatedAt: 1 });
export const Usuario = mongoose.model('Usuarios', UsuarioSchema);
