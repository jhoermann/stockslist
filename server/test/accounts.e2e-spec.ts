import { Test, TestingModule } from '@nestjs/testing'
import { INestApplication, ValidationPipe } from '@nestjs/common'
import * as request from 'supertest'
import { AppModule } from './../src/app.module'
import Database from './../src/database'
import { AccountsService } from './../src/accounts/accounts.service'

describe('AccountsController (e2e)', () => {
  let app: INestApplication
  let accountsService: AccountsService

  beforeAll(() => {
    Database.initTestDb()
  })

  beforeEach(async () => {
    accountsService = new AccountsService()
    
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile()

    app = moduleFixture.createNestApplication()
    app.useGlobalPipes(new ValidationPipe({
      whitelist: true,
    }))
    await app.init()
  })

  it('gets all Accounts', () => {
    return request(app.getHttpServer())
      .get('/accounts')
      .expect(200)
      .expect(accountsService.getAccounts())
  })

  it('gets the default Account', () => {
    return request(app.getHttpServer())
      .get('/accounts/1')
      .expect(200)
      .expect(accountsService.getAccount(1))
  })

  afterAll(() => {
    Database.deleteTestDb()
  })
})
