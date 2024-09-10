import { Injectable } from '@nestjs/common';import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LeaveModule } from './leave/leave.module';
import { Leave } from './leave/entities/leave.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite', // Mund ta ndryshosh me PostgreSQL ose MySQL
      database: 'db.sqlite', // Databaza SQLite për qëllime testimi
      entities: [Leave],
      synchronize: true, // Kujdes në production
    }),
    LeaveModule,
  ],
})
export class AppModule {}

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
