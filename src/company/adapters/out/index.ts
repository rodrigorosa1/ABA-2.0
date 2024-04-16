import { Provider } from "@nestjs/common";
import { CompanyAdapter } from "./company-adapter";
import { CompanyMapper } from "./company-mapper";
import { CompanyPersistencePort } from "src/company/application/ports/out/company-persistence.port";

export const CompanyServicesOut: Provider[] = [
    {
        provide: CompanyPersistencePort,
        useClass: CompanyAdapter
    },
    CompanyMapper
];