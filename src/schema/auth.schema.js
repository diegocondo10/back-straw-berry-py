import {
    AplicacionTC,
    Aplicacion,
    PermisoTC,
    Permiso,
} from '../models/Auth.models';

PermisoTC.addResolver({
    name: 'test',
    type: [PermisoTC],
    args: { myParam: 'String' },
    resolve: ({ source, args, context, info }) => {
        return Permiso.find().populate('aplicacion');
    },
});

const AplicacionQuery = {
    //aplicacionById: AplicacionTC.getResolver('findById'),
    //aplicacionByIds: AplicacionTC.getResolver('findByIds'),
    //aplicacionOne: AplicacionTC.getResolver('findOne'),
    aplicacionMany: AplicacionTC.getResolver('findMany'),
    //aplicacionCount: AplicacionTC.getResolver('count'),
    //aplicacionConnection: AplicacionTC.getResolver('connection'),
    //aplicacionPagination: AplicacionTC.getResolver('pagination'),
    //test: () => AplicacionTC.getResolver('test'),
};

const PermisoSchema = {
    permisos: PermisoTC.getResolver('test'),
    permisosConnection: PermisoTC.getResolver('connection'),
};

export { AplicacionQuery, PermisoSchema };
