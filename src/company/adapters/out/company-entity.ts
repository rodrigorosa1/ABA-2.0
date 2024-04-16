import { Column, Model, DataType, Table, Default, PrimaryKey, BeforeValidate, BelongsTo, ForeignKey } from 'sequelize-typescript';
import { v4 as uuidv4 } from 'uuid';
import { CompanyStatus } from './enums/company.enum';

@Table({
    tableName: "companies",
    freezeTableName: true,
    timestamps: true,
})
export class CompanyEntity extends Model<CompanyEntity> {
    @BeforeValidate
    static addUUID(instance: CompanyEntity) {
        if (!instance.id) {
            instance.id = uuidv4();
        }
    }

    @PrimaryKey
    @Default(DataType.UUIDV4)
    @Column({
        type: DataType.UUID,
    })
    id: string;

    @Column({
        type: DataType.STRING,
    })
    companyName: string;

    @Column({
        type: DataType.STRING,
    })
    tradeName: string;

    @Column({
        type: DataType.STRING,
    })
    documentNumber: string;

    @Column({
        type: DataType.STRING,
    })
    address: string;

    @Column({
        type: DataType.NUMBER,
    })
    address_number: number;

    @Column({
        type: DataType.STRING,
    })
    complement: string;

    @Column({
        type: DataType.STRING,
    })
    zipCode: string;

    @Column({
        type: DataType.STRING,
    })
    city: string;

    @Column({
        type: DataType.STRING,
    })
    state: string;

    @Column({
        type: DataType.STRING,
    })
    country: string;

    @Column({
        type: DataType.STRING,
    })
    email: string;

    @Column({
        type: DataType.STRING,
    })
    phone: string;

    status: CompanyStatus;
}