import { getCustomRepository } from 'typeorm';

import CopyPasta from '../models/CopyPasta';
import CopyPastasRepository from '../repositories/CopyPastasRepositories';

class LikeCopyPastaService {
  public async execute(copyPastaId: string): Promise<CopyPasta | undefined> {
    const copyPastasRepository = getCustomRepository(CopyPastasRepository);

    const findCopyPasta = await copyPastasRepository.findOne({
      id: copyPastaId,
    });

    if (findCopyPasta) {
      findCopyPasta.likes += 1;
      const updatedCopyPasta = findCopyPasta;

      const copyPasta = await copyPastasRepository.save(updatedCopyPasta);
      return copyPasta;
    }

    return undefined;
  }
}

export default LikeCopyPastaService;
