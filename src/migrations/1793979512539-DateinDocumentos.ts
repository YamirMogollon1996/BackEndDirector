import  type { MigrationInterface, QueryRunner } from "typeorm";

export class DateinDocumentos1793979512539 implements MigrationInterface {
    name = 'DateinDocumentos1793979512539'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`documento\` ADD \`fechaSubida\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`documento\` DROP COLUMN \`fechaSubida\``);
    }

}
