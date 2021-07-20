import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateTodo1626419175515 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'todo',
                columns: [
                    {
                       name: 'id',
                       type: 'varchar',
                       isPrimary: true,
                       generationStrategy: 'uuid',                    
                    },
                    {
                       name: 'title',
                       type: 'varchar',
                       isNullable: false,
                       
                    },
                    {
                        name: 'description',
                        type: 'varchar',
                        isNullable: true,
                        
                     },
                     {
                        name: 'createdOn',
                        type: 'timestamp with time zone',
                        isNullable: false,
                        
                     },
                     {
                        name: 'dueDate',
                        type: 'timestamp with time zone',
                        isNullable: true,
                        
                     }

                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('todo');
    }

}
