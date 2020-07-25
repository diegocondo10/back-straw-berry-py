import cors from 'cors';
import express from 'express';
import morgan from 'morgan';
import CategoriaRouter from './routes/categorias';
import conectarDB from './config/db';
import { default as siteRouter } from './routes/site';
import UsuarioRouter from './routes/usuarios';
import ProductoRouter from './routes/productos';

const app = express();

//CONEXION CON LA BASE DE DATOS
conectarDB();

app.use(cors());

app.use(express.json({ extend: true }));

app.use(morgan('dev'));

app.set('port', 8000);

app.use('/api/v1/site', siteRouter);
app.use('/api/v1/usuarios', UsuarioRouter);
app.use('/api/v1/categorias', CategoriaRouter);
app.use('/api/v1/productos', ProductoRouter);

app.listen(app.get('port'), () => {
  console.log(`SERVER LISTEN ON PORT ${8000}`);
});
