import { Router } from 'express';
import copypastasRouter from './copypastas.routes';

const routes = Router();

routes.use('/copypastas', copypastasRouter);

export default routes;
