import { Entity, Column, ObjectIdColumn, ObjectID } from 'typeorm'

@Entity()
export class Account {
  @ObjectIdColumn()
  _id: ObjectID

  @Column()
  name: string
}