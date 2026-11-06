import type { MigrationInterface, QueryRunner } from "typeorm";

export class AddRelationExmaenAndDocumento1793975055252 implements MigrationInterface {
    name = 'AddRelationExmaenAndDocumento1793975055252'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`documento\` ADD \`examanId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`documento\` ADD CONSTRAINT \`FK_3717bba0a1423adb5e27b6f0da8\` FOREIGN KEY (\`examanId\`) REFERENCES \`examan\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`documento\` DROP FOREIGN KEY \`FK_3717bba0a1423adb5e27b6f0da8\``);
        await queryRunner.query(`ALTER TABLE \`documento\` DROP COLUMN \`examanId\``);
    }

}
