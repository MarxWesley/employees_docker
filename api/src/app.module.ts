import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployerModule } from './employers/employers.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employer } from './employers/entities/employer.entity';


@Module({
  imports: [EmployerModule,
    TypeOrmModule.forRoot({
      type: 'postgres',         
      host: 'localhost',     
      port: 5432,            
      username: 'postgres',      
      password: 'postgres',     
      database: 'employees', 
      entities: [Employer],      
      synchronize: true,     
    }),TypeOrmModule.forFeature([Employer]), 
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
