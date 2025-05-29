export class CreateUserDto {
  name?: string;
  type?: string; // enum string
  state?: number;
  email?: string;
  mobile_no?: string;
  password: string;
  platform?: string;
  remarks?: string;
}
