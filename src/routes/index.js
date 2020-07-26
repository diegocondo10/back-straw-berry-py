import { Router } from 'express';
import AuthRouter from './Auth.routes';

const ApiRouter = Router();

ApiRouter.use('/auth', AuthRouter);

export default ApiRouter;
