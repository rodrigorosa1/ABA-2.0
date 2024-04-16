import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { CompanyApplicationModule } from './company/application/company-application.module';
import { CompanyAdapterModule } from './company/adapters/company-adapter.module';
import { CompanyEntity } from './company/adapters/out/company-entity';

@Module({
  imports: [
    CompanyApplicationModule,
      CompanyAdapterModule,
      ConfigModule.forRoot(),
      SequelizeModule.forRoot({
        dialect: 'postgres',
        host: process.env.DB_HOST,
        port: 5432,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        autoLoadModels: true,
        synchronize: false,
        models: [CompanyEntity],
      }),
  ],
})
export class AppModule {}
