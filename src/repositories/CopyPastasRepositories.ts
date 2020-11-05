import CopyPasta from '../models/CopyPasta';

interface CreateCopyPastaDTO {
  readonly name: string;
  readonly content: string;
  readonly date: Date;
}

class CopyPastasRepository {
  private copyPastas: CopyPasta[];

  constructor() {
    this.copyPastas = [];
  }

  public all(): CopyPasta[] {
    return this.copyPastas;
  }

  public create({ name, content, date }: CreateCopyPastaDTO): CopyPasta {
    const copyPasta = new CopyPasta({ name, content, date });

    this.copyPastas.push(copyPasta);

    return copyPasta;
  }
}

export default CopyPastasRepository;
