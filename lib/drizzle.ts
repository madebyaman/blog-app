import "server-only"
require('dotenv').config({ path: '.env.local' })
import { drizzle } from 'drizzle-orm/mysql2'
import mysql from 'mysql2/promise'

export async function connect() {
  const connection = await mysql.createConnection(process.env.DB_URL as string)
  return drizzle(connection)
}
