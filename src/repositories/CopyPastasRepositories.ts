import CopyPasta from '../models/CopyPasta';

class CopyPastasRepository {
  private copyPastas: CopyPasta[];

  constructor() {
    this.copyPastas = [];
  }

  public all(): CopyPasta[] {
    return this.copyPastas;
  }

  public create(name: string, content: string, date: Date): CopyPasta {
    const copyPasta = new CopyPasta(name, content, date);

    this.copyPastas.push(copyPasta);

    return copyPasta;
  }
}

export default CopyPastasRepository;
