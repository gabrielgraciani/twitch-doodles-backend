import { Router } from 'express';
import CopyPasta from '../models/CopyPasta';

const copypastasRouter = Router();
const copyPastas: CopyPasta[] = [];

copypastasRouter.post('/', (req, res) => {
  const { name, content, date } = req.body;
  const copyPasta = new CopyPasta(name, content, date);

  copyPastas.push(copyPasta);
  return res.json(copyPasta);
});

export default copypastasRouter;
