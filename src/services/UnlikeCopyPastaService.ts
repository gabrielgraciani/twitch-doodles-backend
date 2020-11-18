import { getCustomRepository } from 'typeorm';

import CopyPastasRepository from '../repositories/CopyPastasRepositories';

class UnlikeCopyPastaService {
  public async execute(copyPastaId: string): Promise<{ message: string }> {
    const copyPastasRepository = getCustomRepository(CopyPastasRepository);

    const findCopyPasta = await copyPastasRepository.findOne({
      id: copyPastaId,
    });

    if (findCopyPasta) {
      if (findCopyPasta.likes === 0) {
        findCopyPasta.likes = 0;
      } else {
        findCopyPasta.likes -= 1;
      }
      const updatedCopyPasta = findCopyPasta;

      await copyPastasRepository.save(updatedCopyPasta);
      return { message: 'successfully unliked' };
    }

    return { message: 'error on unlike a copyPasta' };
  }
}

export default UnlikeCopyPastaService;
