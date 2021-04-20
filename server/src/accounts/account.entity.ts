import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Account {
  @PrimaryGeneratedColumn()
  id: string

  @Column()
  name: string
}