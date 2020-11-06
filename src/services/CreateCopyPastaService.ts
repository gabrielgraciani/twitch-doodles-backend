import { getCustomRepository } from 'typeorm';

import CopyPasta from '../models/CopyPasta';
import CopyPastasRepository from '../repositories/CopyPastasRepositories';

interface Request {
  name: string;
  content: string;
  date: Date;
}

class CreateCopyPastaService {
  public async execute({ name, content, date }: Request): Promise<CopyPasta> {
    const copyPastasRepository = getCustomRepository(CopyPastasRepository);
    const copyPasta = copyPastasRepository.create({ name, content, date });

    await copyPastasRepository.save(copyPasta);
    return copyPasta;
  }
}

export default CreateCopyPastaService;
