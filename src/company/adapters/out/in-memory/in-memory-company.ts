import { CompanyPersistencePort } from "src/company/application/ports/out/company-persistence.port";
import { Company } from "src/company/domain/company";
import { CompanyStatus } from "../enums/company.enum";

export class inMemoryCompany implements CompanyPersistencePort {
    private companies: Company[];

    constructor() {
        this.companies = [
            {
                id: 'f1addf30-a77a-4dce-8a3e-f7bb3f2d46e2',
                companyName: 'Skynet SA',
                tradeName: 'Skynet',
                documentNumber: '0001',
                address: 'x',
                address_number: 50,
                complement: null,
                zipCode: '91520-020',
                city: 'Florianópolis',
                state: 'SC',
                country: 'Brazil',
                email: 'skynet@org.com',
                phone: '55 48984863711',
                status: CompanyStatus.ACTIVE
            }
        ];
    }

    async save(company: Company): Promise<void> {
        return Promise.resolve();
    }

    async findById(id: string): Promise<Company | null> {
        return Promise.resolve(this.companies.find(company => company.id === id));
    }

    findAll(): Promise<Company[]> {
        return Promise.resolve([
            {
                id: 'f1addf30-a77a-4dce-8a3e-f7bb3f2d46e2',
                companyName: 'Skynet SA',
                tradeName: 'Skynet',
                documentNumber: '0001',
                address: 'x',
                address_number: 50,
                complement: null,
                zipCode: '91520-020',
                city: 'Florianópolis',
                state: 'SC',
                country: 'Brazil',
                email: 'skynet@org.com',
                phone: '55 48984863711',
                status: CompanyStatus.ACTIVE
            }
        ]);
    }

    update(id: string, company: Company): Promise<[number]> {
        return Promise.resolve([1]);
    }

    async findByDocument(documentNumber: string): Promise<Company | null> {
        return Promise.resolve(this.companies.find(company => company.documentNumber === documentNumber));
    }
}