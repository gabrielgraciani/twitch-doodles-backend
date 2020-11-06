import { Router } from 'express';
import { getCustomRepository } from 'typeorm';

import CopyPastasRepository from '../repositories/CopyPastasRepositories';
import CreateCopyPastaService from '../services/CreateCopyPastaService';

const copyPastasRouter = Router();

copyPastasRouter.get('/', async (req, res) => {
  const copyPastasRepository = getCustomRepository(CopyPastasRepository);
  const copyPastas = await copyPastasRepository.find();

  return res.json(copyPastas);
});

copyPastasRouter.post('/', async (req, res) => {
  try {
    const { name, content, date } = req.body;

    const createCopyPasta = new CreateCopyPastaService();

    const copyPasta = await createCopyPasta.execute({ name, content, date });

    return res.json(copyPasta);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
});

export default copyPastasRouter;
