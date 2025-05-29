// src/users/dto/create-user.dto.ts
import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  Length,
  IsNumber,
} from 'class-validator';

export enum UserType {
  Admin = '0',
  Hunter = '1',
  Merchant = '2',
  EComOps = '3',
  Kam = '4',
  SuperAdmin = '5',
  Mst = '6',
  Compliance = '7',
  Accounts = '8',
  HOD = '9',
  DGM = '10',
  CEAO = '11',
  CFO = '12',
}

export class CreateUserDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsEnum(UserType)
  type?: UserType;

  @IsOptional()
  @IsNumber()
  state?: number;

  @IsEmail()
  email: string;

  @IsOptional()
  @IsString()
  mobile_no?: string;

  @IsString()
  @Length(6, 100)
  password: string;

  @IsOptional()
  @IsString()
  platform?: string;

  @IsOptional()
  @IsString()
  remarks?: string;
}
