import { Router } from 'express';
import { getCustomRepository } from 'typeorm';

import CopyPastasRepository from '../repositories/CopyPastasRepositories';
import CreateCopyPastaService from '../services/CreateCopyPastaService';
import DeleteCopyPastaService from '../services/DeleteCopyPastaService';
import LikeCopyPastaService from '../services/LikeCopyPastaService';
import UnlikeCopyPastaService from '../services/UnlikeCopyPastaService';

const copyPastasRouter = Router();

copyPastasRouter.get('/', async (req, res) => {
  const copyPastasRepository = getCustomRepository(CopyPastasRepository);
  const copyPastas = await copyPastasRepository.find({
    order: { date: 'DESC' },
  });

  return res.json(copyPastas);
});

copyPastasRouter.get('/popular', async (req, res) => {
  const copyPastasRepository = getCustomRepository(CopyPastasRepository);
  const copyPastas = await copyPastasRepository.find({
    order: { likes: 'DESC' },
    take: 3,
  });

  return res.json(copyPastas);
});

copyPastasRouter.post('/', async (req, res) => {
  try {
    const { name, content, date, categories } = req.body;

    const createCopyPasta = new CreateCopyPastaService();

    const copyPasta = await createCopyPasta.execute({
      name,
      content,
      date,
      categories,
    });

    return res.json(copyPasta);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
});

copyPastasRouter.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const deleteCopyPasta = new DeleteCopyPastaService();

    const copyPasta = await deleteCopyPasta.execute(id);

    return res.json(copyPasta);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
});

copyPastasRouter.post('/like/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const likeCopyPasta = new LikeCopyPastaService();

    const responseLikeCopyPasta = await likeCopyPasta.execute(id);

    return res.json(responseLikeCopyPasta);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
});

copyPastasRouter.post('/unlike/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const unlikeCopyPasta = new UnlikeCopyPastaService();

    const responseUnlikeCopyPasta = await unlikeCopyPasta.execute(id);

    return res.json(responseUnlikeCopyPasta);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
});

export default copyPastasRouter;
