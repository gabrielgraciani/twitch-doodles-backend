import { getCustomRepository } from 'typeorm';

import CopyPastasRepository from '../repositories/CopyPastasRepositories';

class LikeCopyPastaService {
  public async execute(copyPastaId: string): Promise<{ message: string }> {
    const copyPastasRepository = getCustomRepository(CopyPastasRepository);

    const findCopyPasta = await copyPastasRepository.findOne({
      id: copyPastaId,
    });

    if (findCopyPasta) {
      findCopyPasta.likes += 1;
      const updatedCopyPasta = findCopyPasta;

      await copyPastasRepository.save(updatedCopyPasta);
      return { message: 'successfully liked' };
    }

    return { message: 'error on like a copyPasta' };
  }
}

export default LikeCopyPastaService;
