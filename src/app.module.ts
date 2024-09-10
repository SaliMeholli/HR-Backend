import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { DepartmentsModule } from './departments/departments.module';
import { LeaveModule } from './leave/leave.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: "mysql",
    host: "localhost",
    port: 3308,
    username: "root",
    database: "hr-database",
    entities: [__dirname + '/../**/*.entity.js'],
    synchronize: true,
  }), UsersModule, DepartmentsModule,  LeaveModule],
  
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
