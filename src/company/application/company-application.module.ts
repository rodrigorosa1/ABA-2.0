import { forwardRef, Module } from "@nestjs/common";
import { CompanyAdapterModule } from "../adapters/company-adapter.module";
import { Services } from "./services";

@Module({
    imports: [forwardRef(() => CompanyAdapterModule)],
    providers: [...Services],
    exports: [...Services]
})
export class CompanyApplicationModule { }