import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import Database from './database'

async function bootstrap() {
  Database.initDb()
  const app = await NestFactory.create(AppModule)
  app.enableCors()
  await app.listen(3000)
}
bootstrap();
