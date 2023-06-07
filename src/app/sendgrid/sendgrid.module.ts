import { SendgridController } from './sendgrid.controller';
import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { SendgridService } from '../sendgrid/service/sendgrid.service';

@Module({
  imports: [HttpModule],
  providers: [SendgridService],
  controllers: [SendgridController],
})
export class SendgridModule {}
