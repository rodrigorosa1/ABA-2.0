import { Body, Controller, Get, Param, Patch, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { Company } from "src/company/domain/company";
import { SaveCompanyRequest } from "./save-company.request";
import { CompanyUseCase } from "src/company/application/ports/in/company-use-case";
import { SaveCompanyCommand } from "src/company/application/ports/in/save-company.command";

@Controller('company')
export class CompanyController {
    constructor(private readonly companyUseCase: CompanyUseCase) { }
    @Post()
    @UsePipes(new ValidationPipe({ transform: true }))
    save(@Body() request: SaveCompanyRequest) {
        const command: SaveCompanyCommand = request.toCommand();
        return this.companyUseCase.save(command);
    }

    @Get()
    @UsePipes(new ValidationPipe({ transform: true }))
    findAll(): Promise<Company[]> {
        return this.companyUseCase.findAll();
    }

    @Get(':id')
    @UsePipes(new ValidationPipe({ transform: true }))
    findById(@Param('id') id: string): Promise<Company | null> {
        return this.companyUseCase.findById(id);
    }

    @Patch(':id')
    @UsePipes(new ValidationPipe({ transform: true }))
    update(@Param('id') id: string, @Body() request: SaveCompanyRequest): Promise<[number]> {
        const command: SaveCompanyCommand = request.toCommand();
        return this.companyUseCase.update(id, command);
    }
}