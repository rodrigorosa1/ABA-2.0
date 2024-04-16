import { Injectable } from '@nestjs/common';
import { CompanyPersistencePort } from '../ports/out/company-persistence.port';
import { Company } from 'src/company/domain/company';
import { CompanyUseCase } from '../ports/in/company-use-case';
import { SaveCompanyCommand } from '../ports/in/save-company.command';

@Injectable()
export class CompanyService implements CompanyUseCase {
    constructor(
        private companyPersistencePort: CompanyPersistencePort,
    ) { }

    async save(command: SaveCompanyCommand): Promise<void> {
        const companyCheck = await this.companyPersistencePort.findByDocument(command.documentNumber);
        if (companyCheck) {
            throw new Error('This company exists on the app');
        }

        const company: Company = {
            companyName: command.companyName,
            tradeName: command.tradeName,
            documentNumber: command.documentNumber,
            address: command.address,
            address_number: command.address_number,
            complement: command.complement,
            zipCode: command.zipCode,
            city: command.city,
            state: command.state,
            country: command.country,
            email: command.email,
            phone: command.phone,
        }
        return await this.companyPersistencePort.save(company);
    }

    async findAll(): Promise<Company[]> {
        return await this.companyPersistencePort.findAll();
    }

    async findById(id: string): Promise<Company | null> {
        return await this.companyPersistencePort.findById(id);
    }

    async update(id: string, company: Company): Promise<[number]> {
        const companyCheck = await this.companyPersistencePort.findById(id);
        if (!companyCheck) {
            throw new Error('Company not found');
        }

        return await this.companyPersistencePort.update(id, company);
    }
}