import { MigrationInterface, QueryRunner, TableExclusion } from "typeorm";
import ReadSQLConvertInText from "src/utils/readSQLConvertInText";

export class CreateTableUsers1727225989558 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    const sql = await ReadSQLConvertInText('users', 'create_table_users'); 
    await queryRunner.query(sql);
  };

  public async down(queryRunner: QueryRunner): Promise<void> {
    const sql = await ReadSQLConvertInText('users', 'drop_table_users');
    await queryRunner.query(sql);
  };
}
