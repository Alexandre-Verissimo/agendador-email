import { SaveMailDto } from './dto/save-mail-dto';
import { Injectable, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MailEntity } from './mail.entity';

@Injectable()
export class MailService {
  constructor(
    @InjectRepository(MailEntity)
    private readonly mailRepository: Repository<MailEntity>,
  ) {}

  async save(data: SaveMailDto): Promise<MailEntity> {
    return undefined;
  }
}
