import { Test, TestingModule } from '@nestjs/testing'
import { INestApplication } from '@nestjs/common'
import * as request from 'supertest'
import { AppModule } from './../src/app.module'
import Database from './../src/database'
import { Account } from './../src/accounts/account.interface'

describe('AccountsController (e2e)', () => {
  let app: INestApplication
  const accounts: Account[] = [{"id":1,"name":"Default Account"}]

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

  it('gets all Accounts', () => {
    return request(app.getHttpServer())
      .get('/accounts')
      .expect(200)
      .expect(accounts)
  })

  it('gets the default Account', () => {
    return request(app.getHttpServer())
      .get('/accounts/1')
      .expect(200)
      .expect(accounts[0])
  })

  afterAll(() => {
    Database.deleteTestDb()
  })
})
