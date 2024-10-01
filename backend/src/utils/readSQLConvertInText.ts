import * as fs from "fs";
import * as path from "path";
import { PATH_SQL } from "src/config";

async function ReadSQLConvertInText(tableName:string, nameFileSQL:string) {
  const filePath = path.join(PATH_SQL, tableName, `${nameFileSQL}.sql`);
  const sql = fs.readFileSync(filePath, 'utf-8');

  return sql;
};

export default ReadSQLConvertInText;