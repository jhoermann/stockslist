import { Test, TestingModule } from '@nestjs/testing'
import { INestApplication } from '@nestjs/common'
import * as request from 'supertest'
import { AppModule } from './../src/app.module'
import Database from './../src/database'
import { Stock } from './../src/stocks/stock.interface'

describe('StocksController (e2e)', () => {
  let app: INestApplication

  beforeAll(() => {
    Database.connectTestDb()
    Database.initDb()
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
      .expect([])
  })

  afterAll(() => {
    Database.deleteTestDb()
  })
})
