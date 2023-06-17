import { text, mysqlTable, serial, varchar, timestamp } from 'drizzle-orm/mysql-core'

export const posts = mysqlTable('posts', {
  id: serial('id').primaryKey(),
  title: varchar('title', { length: 255 }).notNull(),
  content: text('content').notNull(),
  created_at: timestamp('created_at').notNull().defaultNow(),
  updated_at: timestamp('updated_at').notNull().defaultNow().onUpdateNow(),
})
