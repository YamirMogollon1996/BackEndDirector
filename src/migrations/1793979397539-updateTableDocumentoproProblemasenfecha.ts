import type { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateTableDocumentoproProblemasenfecha1793979397539 implements MigrationInterface {
    name = 'UpdateTableDocumentoproProblemasenfecha1793979397539'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`documento\` DROP COLUMN \`fechaSubida\``);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`documento\` ADD \`fechaSubida\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)`);
    }

}
