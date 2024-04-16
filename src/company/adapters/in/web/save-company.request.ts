import { IsNotEmpty } from "@nestjs/class-validator";
import { CompanyStatus } from "../../out/enums/company.enum";
import { SaveCompanyCommand } from "src/company/application/ports/in/save-company.command";

export class SaveCompanyRequest {
    @IsNotEmpty()
    readonly companyName: string;

    @IsNotEmpty()
    readonly tradeName: string;

    @IsNotEmpty()
    readonly documentNumber: string;

    @IsNotEmpty()
    readonly address: string;

    @IsNotEmpty()
    readonly address_number: number;

    readonly complement: string;

    @IsNotEmpty()
    readonly zipCode: string;

    @IsNotEmpty()
    readonly city: string;

    @IsNotEmpty()
    readonly state: string;

    @IsNotEmpty()
    readonly country: string;

    @IsNotEmpty()
    readonly email: string;

    @IsNotEmpty()
    readonly phone: string;

    readonly status: CompanyStatus;

    toCommand(): SaveCompanyCommand {
        return new SaveCompanyCommand(
            this.companyName,
            this.tradeName,
            this.documentNumber,
            this.address,
            this.address_number,
            this.complement,
            this.zipCode,
            this.city,
            this.state,
            this.country,
            this.email,
            this.phone,
        );
    }
}