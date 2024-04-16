import { forwardRef, Module } from "@nestjs/common";
import { CompanyServicesOut } from "./out";
import { CompanyController } from "./in/web/company.controller";
import { CompanyApplicationModule } from "../application/company-application.module";

@Module({
    imports: [forwardRef(() => CompanyApplicationModule)],
    providers: [...CompanyServicesOut],
    exports: [...CompanyServicesOut],
    controllers: [CompanyController]
})
export class CompanyAdapterModule { }