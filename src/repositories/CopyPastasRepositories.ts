import { EntityRepository, Repository } from 'typeorm';

import CopyPasta from '../models/CopyPasta';

@EntityRepository(CopyPasta)
class CopyPastasRepository extends Repository<CopyPasta> {}

export default CopyPastasRepository;
