import  type { MigrationInterface, QueryRunner } from "typeorm";

export class AddRelationsTable1793884416834 implements MigrationInterface {
    name = 'AddRelationsTable1793884416834'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`pregunta\` (\`id\` int NOT NULL AUTO_INCREMENT, \`enunciado\` varchar(255) NOT NULL, \`examenId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`examan\` (\`id\` int NOT NULL AUTO_INCREMENT, \`titulo\` varchar(255) NOT NULL, \`descripcion\` text NULL, \`fecha\` date NOT NULL, \`duracionMinutos\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`documento\` (\`id\` int NOT NULL AUTO_INCREMENT, \`nombreArchivo\` varchar(255) NOT NULL, \`rutaArchivo\` text NOT NULL, \`tipoMime\` varchar(100) NOT NULL DEFAULT 'application/pdf', \`cantidadPaginas\` int NOT NULL, \`fechaSubida\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`pregunta\` ADD CONSTRAINT \`FK_abb0c339f345f9d2fde36332615\` FOREIGN KEY (\`examenId\`) REFERENCES \`examan\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`pregunta\` DROP FOREIGN KEY \`FK_abb0c339f345f9d2fde36332615\``);
        await queryRunner.query(`DROP TABLE \`documento\``);
        await queryRunner.query(`DROP TABLE \`examan\``);
        await queryRunner.query(`DROP TABLE \`pregunta\``);
    }

}
