import { getCustomRepository } from 'typeorm';

import CopyPastasRepository from '../repositories/CopyPastasRepositories';

class DeleteCopyPastaService {
  public async execute(id: string): Promise<{ message: string }> {
    const copyPastasRepository = getCustomRepository(CopyPastasRepository);

    await copyPastasRepository.delete({
      id,
    });

    return { message: 'successfully deleted' };
  }
}

export default DeleteCopyPastaService;
