import { NestFactory } from '@nestjs/core'
import { ValidationPipe } from '@nestjs/common'
import { AppModule } from './app.module'
import Database from './database'

async function bootstrap() {
  Database.initDb()
  const app = await NestFactory.create(AppModule)
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
  }))
  app.enableCors()
  await app.listen(3000)
}
bootstrap();
