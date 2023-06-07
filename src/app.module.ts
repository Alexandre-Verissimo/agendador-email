import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SendgridModule } from './app/sendgrid/sendgrid.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST as string,
      port: Number(process.env.DB_PORT),
      database: process.env.DB_DATABASE as string,
      username: process.env.DB_USERNAME as string,
      password: process.env.DB_PASSWORD as string,
      synchronize: true,
      entities: [__dirname + '/**/*.entity{.js,.ts}'],
    }),
    SendgridModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
