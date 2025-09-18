import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { EmployerService } from './employers.service';
import { CreateEmployerDto } from './dto/create-employer.dto';
import { UpdateEmployerDto } from './dto/update-employer.dto';
import { Employer } from './entities/employer.entity';

@Controller('employers')
export class EmployerController {
  constructor(private readonly employerService: EmployerService) { }
 
  @Post()
  @UsePipes(new ValidationPipe({ whitelist: true }))
  async create(@Body() body: CreateEmployerDto) {
    return await this.employerService.create(body);
  }

  @Get()
  async findAll() {
    return await this.employerService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return await this.employerService.findOne(id);
  }

  @Put(':id')
  @UsePipes(new ValidationPipe({ whitelist: true }))
  async update(@Param('id', ParseIntPipe) id: number, @Body() body: Partial<UpdateEmployerDto>) {
    return await this.employerService.update(id, body);
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    await this.employerService.remove(id);
    return { message: 'Employer removido com sucesso' };
  }
}