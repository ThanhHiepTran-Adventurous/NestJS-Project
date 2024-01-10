import { Controller, Get, HttpCode, HttpStatus, Patch, UseGuards } from '@nestjs/common';
import { User } from '@prisma/client';

import { GetUser } from '../auth/decorator';
import { JwtGuard } from '../auth/guard';


@Controller('users')
@UseGuards(JwtGuard)
export class UserController {

    @HttpCode(HttpStatus.OK)
    @Get('me')
    getMe(
        @GetUser() user: User,
    ) {
        return user;
    }


    @Patch()
    editUser() {

    }

}
