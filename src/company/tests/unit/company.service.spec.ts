import { CompanyStatus } from '../../adapters/out/enums/company.enum';
import { inMemoryCompany } from '../../adapters/out/in-memory/in-memory-company';
import { CompanyService } from '../../application/services/company.service';

describe('CompanyService', () => {
  let companyService: CompanyService;
  let companyRepository: inMemoryCompany;

  beforeEach(() => {
    companyRepository = new inMemoryCompany();
    companyService = new CompanyService(companyRepository);
  });

  describe('successSaveCompany', () => {
    it('should return the company save', async () => {
      const payload = {
        companyName: 'Skynet SA',
        tradeName: 'Skynet',
        documentNumber: '0002',
        address: 'x',
        address_number: 50,
        complement: null,
        zipCode: '91520-020',
        city: 'Florianópolis',
        state: 'SC',
        country: 'Brazil',
        email: 'skynet@org.com',
        phone: '55 48984863711',
      }
      const company = await companyService.save(payload);
      expect(company).toEqual(company);
    });
  });

  describe('errorSaveDocumentCompany', () => {
    it('should return the error document in company save', async () => {
      const payload = {
        companyName: 'Skynet SA',
        tradeName: 'Skynet',
        documentNumber: '0001',
        address: 'x',
        address_number: 50,
        complement: null,
        zipCode: '91520-020',
        city: 'Florianópolis',
        state: 'SC',
        country: 'Brazil',
        email: 'skynet@org.com',
        phone: '55 48984863711',
      }
      expect(companyService.save(payload)).rejects.toThrow(
        Error,
      );
    });
  });

  describe('findById', () => {
    it('should return the company', async () => {
      const companyId = 'f1addf30-a77a-4dce-8a3e-f7bb3f2d46e2';
      expect(await companyService.findById(companyId)).toStrictEqual({
        id: 'f1addf30-a77a-4dce-8a3e-f7bb3f2d46e2',
        companyName: 'Skynet SA',
        tradeName: 'Skynet',
        documentNumber: '0001',
        address: 'x',
        address_number: 50,
        complement: null,
        zipCode: '91520-020',
        city: 'Florianópolis',
        state: 'SC',
        country: 'Brazil',
        email: 'skynet@org.com',
        phone: '55 48984863711',
        status: CompanyStatus.ACTIVE
      });
    });
  });

  describe('successUpdateCompany', () => {
    it('should return the company save', async () => {
      const companyId = 'f1addf30-a77a-4dce-8a3e-f7bb3f2d46e2';
      const payload = {
        companyName: 'Skynet SA',
        tradeName: 'Skynet',
        documentNumber: '0001',
        address: 'x',
        address_number: 50,
        complement: null,
        zipCode: '91520-020',
        city: 'Florianópolis',
        state: 'SC',
        country: 'Brazil',
        email: 'skynet@org.com',
        phone: '55 48984863711',
        status: CompanyStatus.INACTIVE
      }
      expect(companyService.update(companyId, payload)).resolves.not.toThrow();
    });
  });

  describe('errorUpdateCompany', () => {
    it('should return the error in company update', async () => {
      const companyId = 'f1addf30-a77a-4dce-8a3e-f7bb3f2d46e1';
      const payload = {
        companyName: 'Skynet SA',
        tradeName: 'Skynet',
        documentNumber: '0001',
        address: 'x',
        address_number: 50,
        complement: null,
        zipCode: '91520-020',
        city: 'Florianópolis',
        state: 'SC',
        country: 'Brazil',
        email: 'skynet@org.com',
        phone: '55 48984863711',
        status: CompanyStatus.INACTIVE
      }
      expect(companyService.update(companyId, payload)).rejects.toThrow(
        Error,
      );
    });
  });
});