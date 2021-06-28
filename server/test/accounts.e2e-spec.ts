import { Test } from '@nestjs/testing'
import { INestApplication, ValidationPipe } from '@nestjs/common'
import * as request from 'supertest'
import { AppModule } from './../src/app.module'
import { getManager, getRepository } from 'typeorm'
import { Account } from '../src/accounts/account.entity'
import dbDefaults from '../db-defaults'

describe('AccountsController (e2e)', () => {
  let app: INestApplication

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

    const entityManager = getManager()
    entityManager.clear(Account)

    const accountRepository = getRepository(Account)
    accountRepository.save(dbDefaults.test.Accounts[0])
  })

  it('gets all Accounts', () => {
    return request(app.getHttpServer())
      .get('/accounts')
      .expect(200)
      .expect([])
  })
})
