import { Provider } from "@nestjs/common";
import { CompanyService } from "./company.service";
import { CompanyUseCase } from "../ports/in/company-use-case";

export const Services: Provider[] = [
    {
        provide: CompanyUseCase,
        useClass: CompanyService
    }
];