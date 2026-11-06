import  type { MigrationInterface, QueryRunner } from "typeorm";

export class Addpassword1793796252323 implements MigrationInterface {
    name = 'Addpassword1793796252323'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`alumno\` ADD \`apellido\` varchar(100) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`alumno\` DROP COLUMN \`apellido\``);
    }

}
