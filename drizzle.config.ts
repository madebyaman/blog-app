require('dotenv').config({ path: '.env.local' })
import type { Config } from "drizzle-kit";

export default {
  schema: "./db/schema.ts",
  connectionString: process.env.DB_URL,
  out: './drizzle/migrations'
} satisfies Config;
