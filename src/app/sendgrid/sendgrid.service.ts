import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SendgridService {
  constructor(private readonly httpService: HttpService) {}

  async sendEmail(): Promise<boolean> {
    return false;
  }
}
