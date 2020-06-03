import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import Database from './database'

function initDb() {
  Database.connectDb()
  Database.initDb()
}

async function bootstrap() {
  initDb()
  const app = await NestFactory.create(AppModule)
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:4200")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next()
  })
  await app.listen(3000)
}
bootstrap();
