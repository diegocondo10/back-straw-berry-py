import { ApolloServer } from 'apollo-server-express';
import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import conectarDB from './config/db';
import ApiRouter from './routes';
import schema from './schema';
import dotenv from 'dotenv';

dotenv.config();
const app = express();

//CONEXION CON LA BASE DE DATOS
conectarDB();

//PERMITIMOS LAS CONEXIONES DE PLATAFORMAS O SERVIDORES EXTERNOS
app.use(cors());

/*
  DAMOS LA CAPACIDAD A EXPRESS DE LEER Y ENVIAR  PETICIONES EN FORMATO JSON 
  DE FORMA GLOBAL
*/
app.use(express.json({ extend: true }));

//MIDDLEWARE DE DESARROLLO.
app.use(morgan('dev'));

//SE SETTEA EL PUERTO A MI SERVIDOR
app.set('port', 8000);

//RUTAS DEL API
app.use('/api/v1', ApiRouter);

const server = new ApolloServer({
    schema,
    cors: true,
    playground: process.env.NODE_ENV === 'development' ? true : false,
    introspection: true,
    tracing: true,
    path: '/',
});

server.applyMiddleware({
    app,
    path: '/',
    cors: true,
    onHealthCheck: () =>
        // eslint-disable-next-line no-undef
        new Promise((resolve, reject) => {
            if (mongoose.connection.readyState > 0) {
                resolve();
            } else {
                reject();
            }
        }),
});

//EJECUCION DEL SERVIDOR
app.listen(app.get('port'), () => {
    console.log(`SERVER LISTEN ON PORT ${app.get('port')}`);
});
