import { Router } from 'express';
import UsuarioRouter from './usuarios';

const ApiRouter = Router();

ApiRouter.use('/usuarios', UsuarioRouter);

export default ApiRouter;
