import { Company } from "src/company/domain/company";
import { SaveCompanyCommand } from "./save-company.command";

export abstract class CompanyUseCase {
    abstract save(command: SaveCompanyCommand): Promise<void>;
    abstract findAll(): Promise<Company[]>;
    abstract findById(id: string): Promise<Company | null>;
    abstract update(id: string, company: Company): Promise<[number]>;
}