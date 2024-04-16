export class SaveCompanyCommand {
    constructor(
        readonly companyName: string,
        readonly tradeName: string,
        readonly documentNumber: string,
        readonly address: string,
        readonly address_number: number,
        readonly complement: string,
        readonly zipCode: string,
        readonly city: string,
        readonly state: string,
        readonly country: string,
        readonly email: string,
        readonly phone: string,
    ) {}
}