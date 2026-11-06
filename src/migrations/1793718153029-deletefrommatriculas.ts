import type { MigrationInterface, QueryRunner } from "typeorm";

export class Deletefrommatriculas1793718153029 implements MigrationInterface {
    name = 'Deletefrommatriculas1793718153029'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`matriculas\` DROP COLUMN \`isColumActive\``);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`matriculas\` ADD \`isColumActive\` tinyint NULL`);
    }

}
