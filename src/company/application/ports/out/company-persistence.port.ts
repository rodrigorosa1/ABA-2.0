import { Company } from "src/company/domain/company";

export abstract class CompanyPersistencePort {
    abstract save(company: Company): Promise<void>;
    abstract findAll(): Promise<Company[]>;
    abstract findById(id: string): Promise<Company | null>;
    abstract update(id: string, company: Company): Promise<[number]>;
    abstract findByDocument(id: string): Promise<Company | null>;
}