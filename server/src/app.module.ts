import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AccountsModule } from './accounts/accounts.module'

@Module({
  imports: [
    AccountsModule,
    TypeOrmModule.forRoot(),
  ],
})
export class AppModule {}
