import { INestApplication, ValidationPipe } from '@nestjs/common';
import { Test } from '@nestjs/testing'
import * as pactum from 'pactum';
import { AppModule } from '../src/app.module';

import { PrismaService } from '../src/prisma/prisma.service';
import { AuthDto } from 'src/auth/dto';

describe('App e2e', () => {

  let app: INestApplication;

  let prisma: PrismaService

  beforeAll(async () => {
    const moduleRef =
      await Test.createTestingModule({
        imports: [AppModule],
      }).compile();
    app = moduleRef.createNestApplication();
    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
      }),
    );
    await app.init();

    await app.listen(3333);

    prisma = app.get(PrismaService);
    await prisma.cleanDb();

    pactum.request.setBaseUrl('http://localhost:3333')

  });
  afterAll(() => {
    app.close();
  });

  describe('Auth', () => {
    const dto: AuthDto = {
      email: 'vlad@gmail.com',
      password: '123'
    };
    describe('Signup', () => {

      it('should throw if email empty', () => {
        return pactum
          .spec()
          .post(
            '/auth/signup',
          )
          .withBody({
            password: dto.password
          })
          .expectStatus(400)
      })

      it('should signup', () => {
        return pactum
          .spec()
          .post(
            '/auth/signup',
          )
          .withBody(dto)
          .expectStatus(201)
      });
    });

    describe('Signin', () => {
      it('should signin', () => {
        return pactum
          .spec()
          .post(
            '/auth/signin',
          )
          .withBody(dto)
          .expectStatus(200)
      });

    });


  })
  describe('User', () => {
    describe('Get me', () => {

    })

    describe('Edit user', () => {

    })
  })
  describe('Bookmarks', () => {
    describe('Create bookmarks', () => {

    })
    describe('Get bookmarks', () => {

    })

    describe('Get bookmark by id', () => {

    })

    describe('Edit bookmark', () => {

    })

    describe('Delete bookmark', () => {

    })
  })



})
