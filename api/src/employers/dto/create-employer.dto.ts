import { IsString, IsNotEmpty, IsNumber, Min } from 'class-validator';
export class CreateEmployerDto {
    @IsString()
    @IsNotEmpty()
    full_name: string;

    @IsString()
    @IsNotEmpty()
    document: string;

    @IsString()
    @IsNotEmpty()
    role: string;

    @IsNumber()
    @Min(0)
    salary: number;
}