import { IsEmail, IsString, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateEmployeeDto {
    @ApiProperty({
        description: 'This field represents the employee email',
        minLength: 7,
        maxLength: 80,
      })
    @IsEmail()
    @Length(7, 80)
    mail_address : string;

    @ApiProperty({
        description: 'This field represents the employee password',
        minLength: 1, // test à 1 sinon 72
        maxLength: 72,
      })
    @IsString()
    @Length(1, 72) // test a 1 sinon 72
    password : string;

    public humanInformation_UUID : string;


}