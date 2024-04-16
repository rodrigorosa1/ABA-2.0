import { CompanyStatus } from "../adapters/out/enums/company.enum";

export class Company {
    id?: string;
    companyName: string;
    tradeName: string;
    documentNumber: string;
    address: string;
    address_number?: number;
    complement: string;
    zipCode: string;
    city: string;
    state: string;
    country: string;
    email: string;
    phone: string;
    status?: CompanyStatus;
}