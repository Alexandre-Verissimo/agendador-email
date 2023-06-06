import { SendgridService } from '../service/sendgrid.service';
import { HttpService } from '@nestjs/axios';
import { Test, TestingModule } from '@nestjs/testing';
import { AxiosResponse } from 'axios';
import { of } from 'rxjs';
import { SendEmailInterface } from '../interface/send-email.interface';

describe('SendgridService', () => {
  let sendGridservice: SendgridService;
  let httpService: HttpService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        SendgridService,
        {
          provide: HttpService,
          useValue: {
            post: jest.fn(),
          },
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
      const data: SendEmailInterface = {
        personalizations: [
          {
            to: [
              {
                name: 'Cliente',
                email: 'cliente@email.com',
              },
            ],
          },
        ],
        from: {
          email: 'leonardo@tracontecnologia.com',
          name: 'Leonardo',
        },
        reply_to: {
          email: 'suporte@tracontecnologia.com',
          name: 'Suporte',
        },
        subject: 'Sua fatura chegou!',
        content: [
          {
            type: 'text/html',
            value: '<p>Sua Fatura chegou!</p>',
          },
        ],
      };
      jest
        .spyOn(httpService, 'post')
        .mockReturnValueOnce(
          of({ status: 202, statusText: 'ACCEPTED', config: {}, headers: {}, data: '' } as AxiosResponse<any>),
        );
      // Act
      const result = await sendGridservice.sendEmail(data);
      // Assert
      expect(result).toBeTruthy();
      expect(httpService.post).toBeCalledTimes(1);
    });
  });
});
