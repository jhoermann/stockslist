import { Test } from '@nestjs/testing'
import { INestApplication, ValidationPipe } from '@nestjs/common'
import * as request from 'supertest'
import { AppModule } from './../src/app.module'
import { DatabaseTestService } from './database-test.service'
import dbDefaults from '../db-defaults'
import { idsToString } from './util'

describe('AccountsController (e2e)', () => {
  let app: INestApplication
  let databaseTestService: DatabaseTestService

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    })
      .compile()

    app = moduleRef.createNestApplication()
    app.useGlobalPipes(new ValidationPipe({
      whitelist: true,
    }))
    await app.init()

    databaseTestService = new DatabaseTestService()
  })

  beforeEach(async () => {
    await databaseTestService.loadSampleData()
  })

  afterEach(async () => {
    await databaseTestService.clearData()
  })

  it('gets all Accounts', () => {
    return request(app.getHttpServer())
      .get('/accounts')
      .expect(200)
      .expect(idsToString(dbDefaults.test.Accounts))
  })

  afterAll(async () => {
    await app.close()
  })
})
