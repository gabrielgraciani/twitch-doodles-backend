import { Router } from 'express';
import CopyPastasRepository from '../repositories/CopyPastasRepositories';

const copyPastasRouter = Router();
const copyPastasRepository = new CopyPastasRepository();

copyPastasRouter.get('/', (req, res) => {
  const copyPastas = copyPastasRepository.all();

  return res.json(copyPastas);
});

copyPastasRouter.post('/', (req, res) => {
  const { name, content, date } = req.body;

  const copyPasta = copyPastasRepository.create({ name, content, date });

  return res.json(copyPasta);
});

export default copyPastasRouter;
