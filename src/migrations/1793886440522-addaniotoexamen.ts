import type { MigrationInterface, QueryRunner } from "typeorm";

export class Addaniotoexamen1793886440522 implements MigrationInterface {
    name = 'Addaniotoexamen1793886440522'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`examan\` ADD \`anio\` int NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`examan\` DROP COLUMN \`anio\``);
    }

}
