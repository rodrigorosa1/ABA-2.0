import { Injectable } from "@nestjs/common";
import { CompanyMapper } from "./company-mapper";
import { CompanyEntity } from "./company-entity";
import { Company } from "src/company/domain/company";
import { CompanyPersistencePort } from "src/company/application/ports/out/company-persistence.port";

@Injectable()
export class CompanyAdapter implements CompanyPersistencePort {
    constructor(private companyMapper: CompanyMapper) { }

    async save(company: CompanyEntity): Promise<void> {
        const companyEntity: CompanyEntity = this.companyMapper.toEntity(company);
        companyEntity.save();
    }

    async findAll(): Promise<Company[]> {
        return this.companyMapper.toFindAll();
    }

    async findById(id: string): Promise<Company> {
        return this.companyMapper.toFindById(id);
    }

    async update(id: string, company: Company): Promise<[number]> {
        return this.companyMapper.toUpdate(id, company);
    }
    
    async findByDocument(id: string): Promise<Company | null> {
        return this.companyMapper.toFindbyDocument(id);
    }
}