import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('copy_pastas')
class CopyPasta {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  content: string;

  @Column('timestamp with time zone')
  date: Date;
}

export default CopyPasta;
