import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  name: string;

  @Column({
    type: 'enum',
    enum: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
    default: '2',
    comment:
      '0=Admin,1=Hunter,2=Merchant,3=EComOps,4=Kam,5=SuperAdmin,6=Mst(Merchant Success Team),7=Compliance,8=Accounts,9=HOD,10=DGM,11=CEAO,12=CFO',
  })
  type: string;

  @Column({ default: 1 })
  state: number;

  @Column({ nullable: true })
  email: string;

  @Column({ nullable: true })
  mobile_no: string;

  @Column()
  password: string;

  @Column({ nullable: true })
  remember_token: string;

  @Column({ nullable: true })
  platform: string;

  @Column({ default: 0 })
  login_attempts: number;

  @Column({ nullable: true })
  remarks: string;

  @Column({ type: 'timestamp', nullable: true })
  created_at: Date;

  @Column({ type: 'timestamp', nullable: true })
  updated_at: Date;

  @Column({ type: 'timestamp', nullable: true })
  deleted_at: Date;
}
