import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

import { migrate } from 'drizzle-orm/mysql2/migrator';
import path from 'path';
import mysql from 'mysql2/promise';
import { drizzle } from 'drizzle-orm/mysql2';

async function runMigration() {
  try {
    const db = await mysql.createConnection({
      uri: process.env.DB_URL,
    });
    const connection = drizzle(db);

    await migrate(connection, {
      migrationsFolder: path.resolve('drizzle/migrations'),
    });
    process.exit(0);
  } catch (e) {
    console.error('error running migration', e);
    process.exit(1);
  }
}

runMigration();
