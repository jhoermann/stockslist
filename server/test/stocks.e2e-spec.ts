import { Test, TestingModule } from '@nestjs/testing'
import { INestApplication } from '@nestjs/common'
import { _ } from 'lodash'
import * as request from 'supertest'
import { AppModule } from './../src/app.module'
import Database from './../src/database'
import { StocksService } from './../src/stocks/stocks.service'
import { ActionsService } from './../src/stocks/actions/actions.service'

describe('StocksController (e2e)', () => {
  let app: INestApplication
  let stocksService: StocksService
  let actionsService: ActionsService

  beforeAll(() => {
    Database.initTestDb()
  })

  beforeEach(async () => {
    stocksService = new StocksService()
    actionsService = new ActionsService()

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
      .expect(stocksService.getStocks(1))
  })

  it('gets one Stock', () => {
    return request(app.getHttpServer())
      .get('/stocks/1')
      .expect(200)
      .expect(stocksService.getStock(1))
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
        if (!_.isEqual(res.body, stocksService.getStock(2))) {
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

  /* Actions */
  it('gets all Actions of a Stock', () => {
    return request(app.getHttpServer())
      .get('/stocks/1/actions')
      .expect(200)
      .expect(actionsService.getActions(1))
  })

  it('gets one Action by id', () => {
    return request(app.getHttpServer())
      .get('/stocks/1/actions/1')
      .expect(200)
      .expect(actionsService.getAction(1))
  })

  it('creates a new Action for a Stock', () => {
    const newAction = {
      type: 'buy',
      quantity: 10,
      price: 5000,
      fees: 550,
    }
    return request(app.getHttpServer())
      .post('/stocks/1/actions')
      .send(newAction)
      .expect(201)
      .expect(res => {
        if (!_.isEqual(res.body, actionsService.getAction(2))) {
          throw new Error('Action not created')
        }
      })
  })

  afterAll(() => {
    Database.deleteTestDb()
  })
})
