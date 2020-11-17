import { getCustomRepository } from 'typeorm';

import CopyPastasRepository from '../repositories/CopyPastasRepositories';

class DeleteAllCopyPastaService {
  public async execute(id: string): Promise<null> {
    const copyPastasRepository = getCustomRepository(CopyPastasRepository);

    await copyPastasRepository.delete({
      id,
    });

    return null;
  }
}

export default DeleteAllCopyPastaService;
