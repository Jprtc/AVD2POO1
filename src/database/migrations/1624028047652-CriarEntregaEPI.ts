import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CriarEntregaEPI1624028047652 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "EPIdelivery",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "employee_id",
                        type: "uuid",
                        isNullable: false
                    },
                    {
                        name: "epi_id",
                        type: "uuid",
                        isNullable: false
                    },
                    {
                        name: "delivery_date",
                        type: "Date"
                    },
                    {
                        name: "delivered_quantity",
                        type: "Number"
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()"
                    }
                ],
                foreignKeys:[
                    {
                        name:'FKEmployee',
                        referencedTableName: 'employees',
                        referencedColumnNames: ['id'],
                        columnNames: ['employee_id'],
                        onDelete: 'SET NULL',
                        onUpdate:'SET NULL'
                    },
                    {
                        name:'FKEPI',
                        referencedTableName:'EPIs',
                        referencedColumnNames:['id'],
                        columnNames: ['epi_id'],
                        onDelete: 'SET NULL',
                        onUpdate:'SET NULL'
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("EPIdelivery")
    }
}
