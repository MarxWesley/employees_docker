import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateEmployerDto } from './dto/create-employer.dto';
import { UpdateEmployerDto } from './dto/update-employer.dto';
import { Employer } from './entities/employer.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class EmployerService {
  constructor(
    @InjectRepository(Employer)
    private employerRepository: Repository<Employer>,
  ) {}

  async create(data: Partial<Employer>) {
    const employer = this.employerRepository.create(data);
    return await this.employerRepository.save(employer);
  }

  async findAll() {
    return await this.employerRepository.find();
  }

  async findOne(id: number) {
    const employer = await this.employerRepository.findOne({ where: { id } });
    if (!employer) {
      throw new NotFoundException(`Employer com ID ${id} não encontrado`);
    }
    return employer;
  }

  async update(id: number, data: Partial<Employer>) {
    const employer = await this.findOne(id);
    Object.assign(employer, data);
    return await this.employerRepository.save(employer);
  }

  async remove(id: number) {
    const employer = await this.findOne(id);
    await this.employerRepository.remove(employer);
  }
}
