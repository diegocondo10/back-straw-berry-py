import cors from 'cors';
import express from 'express';
import morgan from 'morgan';
import conectarDB from './config/db';
import ApiRouter from './routes';

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

//EJECUCION DEL SERVIDOR
app.listen(app.get('port'), () => {
  console.log(`SERVER LISTEN ON PORT ${app.get('port')}`);
});
