import { Test, TestingModule } from '@nestjs/testing'
import { INestApplication } from '@nestjs/common'
import { _ } from 'lodash'
import * as request from 'supertest'
import { AppModule } from './../src/app.module'
import Database from './../src/database'
import { StocksService } from './../src/stocks/stocks.service'
import { ActionsService } from './../src/stocks/actions/actions.service'
import { DividendDatesService } from './../src/stocks/dividend-dates/dividend-dates.service'
import { PricesService } from './../src/stocks/prices/prices.service'

describe('StocksController (e2e)', () => {
  let app: INestApplication
  let stocksService: StocksService
  let actionsService: ActionsService
  let dividendDatesService: DividendDatesService
  let pricesService: PricesService

  beforeAll(() => {
    Database.initTestDb()
  })

  beforeEach(async () => {
    stocksService = new StocksService()
    actionsService = new ActionsService()
    dividendDatesService = new DividendDatesService()
    pricesService = new PricesService()

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
        if(stocksService.getStock(1)) {
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

  /* DividendDates */
  it('gets all DividendDates of a Stock', () => {
    return request(app.getHttpServer())
      .get('/stocks/1/dividend-dates')
      .expect(200)
      .expect(dividendDatesService.getDividendDates(1))
  })

  it('gets one DividendDate', () => {
    return request(app.getHttpServer())
      .get('/stocks/1/dividend-dates/1')
      .expect(200)
      .expect(dividendDatesService.getDividendDate(1))
  })

  it('creates a new DividendDate', () => {
    const newDividendDate = {
      dividend: 150,
      date: new Date().toJSON(),
    }
    return request(app.getHttpServer())
      .post('/stocks/1/dividend-dates')
      .send(newDividendDate)
      .expect(201)
      .expect(res => {
        if (!_.isEqual(res.body, dividendDatesService.getDividendDate(2))) {
          throw new Error('DividendDate not created')
        }
      })
  })

  it('updates a DividendDate', () => {
    return request(app.getHttpServer())
      .put('/stocks/1/dividend-dates/1')
      .send({ dividend: 160 })
      .expect(200)
      .expect(res => {
        if(res.body.dividend !== 160) {
          throw new Error('DividendDate not updated')
        }
      })
  })

  it('deletes a DividendDate', () => {
    return request(app.getHttpServer())
      .delete('/stocks/1/dividend-dates/1')
      .expect(200)
      .expect(() => {
        if(dividendDatesService.getDividendDate(1)) {
          throw new Error('DividendDate not deleted')
        }
      })
  })

  /* Prices */
  it('gets all Prices of a Stock', () => {
    return request(app.getHttpServer())
      .get('/stocks/1/prices')
      .expect(200)
      .expect(pricesService.getPrices(1))
  })

  it('gets one Price by id', () => {
    return request(app.getHttpServer())
      .get('/stocks/1/prices/1')
      .expect(200)
      .expect(pricesService.getPrice(1))
  })

  it('creates a new Price for a Stock', () => {
    const newPrice = {
      dividend: 6500,
      date: new Date().toJSON(),
    }
    return request(app.getHttpServer())
      .post('/stocks/1/prices')
      .send(newPrice)
      .expect(201)
      .expect(res => {
        if (!_.isEqual(res.body, pricesService.getPrice(2))) {
          throw new Error('Price not created')
        }
      })
  })

  afterAll(() => {
    Database.deleteTestDb()
  })
})
