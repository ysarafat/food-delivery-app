import { BadRequestException } from '@nestjs/common';
import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Response } from 'express';
import { RegisterDto } from './dto/user.dto';
import { User } from './entities/user.entity';
import { RegisterResponse } from './types/user.types';
import { UsersService } from './users.service';

@Resolver('User')
// @UseFilters()
export class UsersResolvers {
  constructor(private readonly userService: UsersService) {}
  @Mutation(() => RegisterResponse)
  async register(
    @Args('registerInput') registerDto: RegisterDto,
    @Context() context: { res: Response },
  ): Promise<RegisterResponse> {
    if (!registerDto.name || !registerDto.email || !registerDto.password) {
      throw new BadRequestException('Please fill the all fields!');
    }
    const user = await this.userService.register(registerDto, context.res);
    return { user };
  }

  @Query(() => [User])
  async getUsers() {
    return this.userService.getUsers();
  }
}
