import  type { MigrationInterface, QueryRunner } from "typeorm";

export class AddTableCurso1793968662625 implements MigrationInterface {
    name = 'AddTableCurso1793968662625'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`curso\` (\`id\` int NOT NULL AUTO_INCREMENT, \`nombre\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`examan\` ADD \`cursoId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`examan\` ADD CONSTRAINT \`FK_e7432fc394f4d90f45558a44b47\` FOREIGN KEY (\`cursoId\`) REFERENCES \`curso\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`examan\` DROP FOREIGN KEY \`FK_e7432fc394f4d90f45558a44b47\``);
        await queryRunner.query(`ALTER TABLE \`examan\` DROP COLUMN \`cursoId\``);
        await queryRunner.query(`DROP TABLE \`curso\``);
    }

}
