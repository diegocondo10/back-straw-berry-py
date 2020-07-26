import { SchemaComposer } from 'graphql-compose';
import { AplicacionQuery, PermisoSchema } from './auth.schema';
//import { TaskQuery } from './task';

const schemaComposer = new SchemaComposer();

schemaComposer.Query.addFields({
    ...AplicacionQuery,
    ...PermisoSchema,
});

/*
schemaComposer.Mutation.addFields({
    ...UserMutation,
    ...TaskMutation,
});
*/
export default schemaComposer.buildSchema();
