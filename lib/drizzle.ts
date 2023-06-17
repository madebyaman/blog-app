import "server-only"
require('dotenv').config({ path: '.env.local' })
import { drizzle } from 'drizzle-orm/mysql2'
import mysql from 'mysql2/promise'

const poolConnection = mysql.createPool({
  uri: process.env.DB_URL,
})

const db = drizzle(poolConnection)

export default db
