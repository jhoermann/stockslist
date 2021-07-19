import { Entity, Column, ObjectIdColumn, ObjectID } from 'typeorm'

@Entity()
export class Stock {
  @ObjectIdColumn()
  _id: ObjectID

  @Column()
  accountId: number

  @Column()
  name: string

  @Column()
  isin: string

  @Column()
  wkn: string

  @Column()
  industrySector: string

  @Column()
  created: string
}