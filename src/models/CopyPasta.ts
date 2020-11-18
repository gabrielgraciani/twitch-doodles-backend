import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('copy_pastas')
class CopyPasta {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  content: string;

  @Column()
  categories: string;

  @Column()
  likes: number;

  @Column('timestamp with time zone')
  date: Date;
}

export default CopyPasta;
