import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity({ name: 'mails' })
export class MailEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'destination_address', nullable: false })
  destinationAddress: string;

  @Column({ name: 'destination_name', nullable: false })
  destinationName: string;

  @Column({ name: 'due_sate', type: 'timestamp', nullable: false })
  dueDate: string;

  @Column({ type: 'text', nullable: false })
  body: string;

  @Column({ nullable: false })
  subject: string;

  @CreateDateColumn({ name: 'created_at' })
  status: string;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: string;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: string;
}
