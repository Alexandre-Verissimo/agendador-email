import { HttpService } from '@nestjs/axios';
import { Test, TestingModule } from '@nestjs/testing';
import { SendgridService } from './sendgrid.service';

describe('SendgridService', () => {
  let sendGridservice: SendgridService;
  let httpService: HttpService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        SendgridService,
        {
          provide: HttpService,
          useValue: {},
        },
      ],
    }).compile();

    sendGridservice = module.get<SendgridService>(SendgridService);
    httpService = module.get<HttpService>(HttpService);
  });

  it('should be defined', () => {
    expect(sendGridservice).toBeDefined();
    expect(httpService).toBeDefined();
  });

  describe('sendMail', () => {
    it('should send an email with sucess', async () => {
      //Triple A
      // Arrange
      // Act
      const result = await sendGridservice.sendEmail();
      // Assert
      expect(result).toBeTruthy();
    });
  });
});
