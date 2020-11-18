import { getCustomRepository } from 'typeorm';

import CopyPasta from '../models/CopyPasta';
import CopyPastasRepository from '../repositories/CopyPastasRepositories';

interface Request {
  name: string;
  content: string;
  date: Date;
  categories: string;
  likes?: number;
}

class CreateCopyPastaService {
  public async execute({
    name,
    content,
    date,
    categories,
    likes = 0,
  }: Request): Promise<CopyPasta> {
    const copyPastasRepository = getCustomRepository(CopyPastasRepository);
    const copyPasta = copyPastasRepository.create({
      name,
      content,
      date,
      categories,
      likes,
    });

    await copyPastasRepository.save(copyPasta);
    return copyPasta;
  }
}

export default CreateCopyPastaService;
