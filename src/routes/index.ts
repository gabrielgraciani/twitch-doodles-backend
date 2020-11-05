import { Router } from 'express';
import copyPastasRouter from './copyPastas.routes';

const routes = Router();

routes.use('/copypastas', copyPastasRouter);

export default routes;
