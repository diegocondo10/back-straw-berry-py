import cors from 'cors';
import express from 'express';
import morgan from 'morgan';
import conectarDB from './config/db';
import ApiRouter from './routes';

const app = express();

//CONEXION CON LA BASE DE DATOS
conectarDB();

app.use(cors());

app.use(express.json({ extend: true }));

app.use(morgan('dev'));

app.set('port', 8000);

app.use('/api/v1', ApiRouter);

app.listen(app.get('port'), () => {
  console.log(`SERVER LISTEN ON PORT ${app.get('port')}`);
});
