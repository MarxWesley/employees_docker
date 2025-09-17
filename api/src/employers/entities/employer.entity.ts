import { TypeOrmModule } from '@nestjs/typeorm';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity("Employer")
export class Employer {
    @PrimaryGeneratedColumn()  
    id: number;
    
    @Column()  
    full_name: string;

    @Column()  
    document: string;
    
    @Column()  
    role: string;

    @Column()
    salary: number;
}
