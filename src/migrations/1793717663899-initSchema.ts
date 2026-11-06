import  type { MigrationInterface, QueryRunner } from "typeorm";

export class InitSchema1793717663899 implements MigrationInterface {
    name = 'InitSchema1793717663899'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`alumno\` (\`id\` int NOT NULL AUTO_INCREMENT, \`nombre\` varchar(100) NOT NULL, \`apellido\` varchar(100) NOT NULL, \`email\` varchar(150) NOT NULL, \`edad\` int NOT NULL, \`mon\` varchar(100) NOT NULL, \`isDetalle\` varchar(100) NOT NULL, UNIQUE INDEX \`IDX_e7d79f25fec0804abc7a21bd12\` (\`email\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`matriculas\` (\`id\` int NOT NULL AUTO_INCREMENT, \`alumnoId\` int NOT NULL, \`isColumActive\` tinyint NULL, \`cursoId\` int NOT NULL, \`fechaMatricula\` date NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`matriculas\``);
        await queryRunner.query(`DROP INDEX \`IDX_e7d79f25fec0804abc7a21bd12\` ON \`alumno\``);
        await queryRunner.query(`DROP TABLE \`alumno\``);
    }

}
