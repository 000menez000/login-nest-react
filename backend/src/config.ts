import * as path from 'path'

export const PATH_ROOT = __dirname;
export const PATH_ENITIES = path.resolve(PATH_ROOT, '**', '*.entity{.ts,.js}');
export const PATH_MIGRATIONS = path.resolve(PATH_ROOT, 'migration', '*{.ts,.js}');
export const PATH_SQL = path.resolve(PATH_ROOT, 'sql');