import { Injectable } from "@nestjs/common";
import { CompanyStatus } from "./enums/company.enum";
import { Company } from "src/company/domain/company";
import { CompanyEntity } from "./company-entity";

@Injectable()
export class CompanyMapper {
    toEntity(company: Company): CompanyEntity {
        return CompanyEntity.build({
            companyName: company.companyName,
            tradeName: company.tradeName,
            documentNumber: company.documentNumber,
            address: company.address,
            complement: company.complement,
            zipCode: company.zipCode,
            city: company.city,
            state: company.state,
            country: company.country,
            email: company.email,
            phone: company.phone,
            status: CompanyStatus.ACTIVE,
        });
    }

    toFindAll(): Promise<CompanyEntity[]> {
        return CompanyEntity.findAll();
    }

    toFindById(id: string): Promise<CompanyEntity | null> {
        return CompanyEntity.findByPk(id);
    }

    toUpdate(id: string, company: Company): Promise<[number]> {
        return CompanyEntity.update(company, { where: { id } });
    }

    toFindbyDocument(documentNumber: string): Promise<CompanyEntity | null> {
        return CompanyEntity.findOne({
            where: {
                'documentNumber': documentNumber
            }
        });
    }
}