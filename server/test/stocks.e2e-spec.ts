import { Test, TestingModule } from '@nestjs/testing'
import { INestApplication } from '@nestjs/common'
import { _ } from 'lodash'
import * as request from 'supertest'
import { AppModule } from './../src/app.module'
import Database from './../src/database'
import { Stock } from './../src/stocks/stock.interface'

describe('StocksController (e2e)', () => {
  let app: INestApplication

  beforeAll(() => {
    Database.initTestDb()
  })

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile()

    app = moduleFixture.createNestApplication()
    await app.init()
  })

  it('gets all Stocks', () => {
    return request(app.getHttpServer())
      .get('/accounts/1/stocks')
      .expect(200)
      .expect(Database.db.get('Stocks').filter({accountId:1}).value())
  })

  it('gets one Stock', () => {
    return request(app.getHttpServer())
      .get('/stocks/1')
      .expect(200)
      .expect(Database.db.get('Stocks').getById(1).value())
  })

  it('creates a new Stock', () => {
    const newStock = {
      accountId: 1,
      name: 'Cisco Inc.',
      isin: 'US17275R1023',
      wkn: '878841',
      quantity: 20,
      industrySector: 'Network',
    }
    return request(app.getHttpServer())
      .post('/stocks')
      .send(newStock)
      .expect(201)
      .expect(res => {
        if (!_.isEqual(res.body, Database.db.get('Stocks').getById(2).value())) {
          throw new Error('Stock not created')
        }
      })
  })

  it('updates a Stock', () => {
    return request(app.getHttpServer())
      .put('/stocks/1')
      .send({ quantity: 15 })
      .expect(200)
      .expect(res => {
        if(res.body.quantity !== 15) {
          throw new Error('Stock not updated')
        }
      })
  })

  it('deletes a Stock', () => {
    return request(app.getHttpServer())
      .delete('/stocks/1')
      .expect(200)
      .expect(() => {
        if(Database.db.get('Stocks').getById(1).value()) {
          throw new Error('Stock not deleted')
        }
      })
  })

  afterAll(() => {
    Database.deleteTestDb()
  })
})
