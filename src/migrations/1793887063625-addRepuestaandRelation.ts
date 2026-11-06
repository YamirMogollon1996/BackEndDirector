import type  { MigrationInterface, QueryRunner } from "typeorm";

export class AddRepuestaandRelation1793887063625 implements MigrationInterface {
    name = 'AddRepuestaandRelation1793887063625'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`respuesta\` (\`id\` int NOT NULL AUTO_INCREMENT, \`contenido\` text NOT NULL, \`preguntaId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`respuesta\` ADD CONSTRAINT \`FK_92e47895593ddd4418957fd3f14\` FOREIGN KEY (\`preguntaId\`) REFERENCES \`pregunta\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`respuesta\` DROP FOREIGN KEY \`FK_92e47895593ddd4418957fd3f14\``);
        await queryRunner.query(`DROP TABLE \`respuesta\``);
    }

}
