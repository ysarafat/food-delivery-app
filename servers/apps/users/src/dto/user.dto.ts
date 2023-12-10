import {} from '@nestjs/class-validator';
import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsString, MinLength } from 'class-validator';

// register
@InputType()
export class RegisterDto {
  @Field()
  @IsNotEmpty({ message: 'Name is required.' })
  @IsString({ message: 'Name must be a string.' })
  name: string;

  @Field()
  @IsNotEmpty({ message: 'Password is required.' })
  @MinLength(8, { message: 'Password must be at least 8 characters.' })
  password: string;

  @Field()
  @IsNotEmpty({ message: 'Email is required.' })
  @IsString({ message: 'Email must be a string.' })
  email: string;
}

// login
@InputType()
export class LoginDto {
  @Field()
  @IsNotEmpty({ message: 'Email is required.' })
  @IsString({ message: 'Email must be a string.' })
  email: string;

  @Field()
  @IsNotEmpty({ message: 'Password is required.' })
  @MinLength(8, { message: 'Password must be at least 8 characters.' })
  password: string;
}
