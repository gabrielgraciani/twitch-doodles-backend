import { v4 as uuid } from 'uuid';

class CopyPasta {
  id: string;

  name: string;

  content: string;

  date: Date;

  constructor({ name, content, date }: Omit<CopyPasta, 'id'>) {
    this.id = uuid();
    this.name = name;
    this.content = content;
    this.date = date;
  }
}

export default CopyPasta;
