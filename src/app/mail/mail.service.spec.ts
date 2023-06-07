import { SaveMailDto } from './dto/save-mail-dto';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MailEntity } from './mail.entity';
import { MailService } from './mail.service';

describe('MailService', () => {
  let mailService: MailService;
  let mailRepository: Repository<MailEntity>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        MailService,
        {
          provide: getRepositoryToken(MailEntity),
          useValue: {},
        },
      ],
    }).compile();

    mailService = module.get<MailService>(MailService);
    mailRepository: module.get<Repository<MailEntity>>(getRepositoryToken(MailEntity));
  });

  it('should be defined', () => {
    expect(mailService).toBeDefined();
    expect(mailRepository).toBeDefined();
  });

  describe('save', () => {
    it('should save a new email with sucess', async () => {
      //Arrange
      const data: SaveMailDto = {
        destinationAddress: 'user@email.com',
        dueDate: '2022-05-01T12:00:00Z',
      };
      //Act
      const result = await mailService.save(data);
      //Assert
      expect(result).toBeDefined();
      expect
    });
  });
});
