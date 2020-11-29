import { Router } from 'express';
import copyPastasRouter from './copyPastasRoutes';

const routes = Router();

routes.use('/copypastas', copyPastasRouter);

export default routes;
