import { bigint, mysqlTable, varchar } from 'drizzle-orm/mysql-core';
import { gendersTable } from './genders.schema';
import { relations } from 'drizzle-orm';

export const usersTable = mysqlTable('users', {
  id: bigint({ mode: 'bigint' }).primaryKey().autoincrement().notNull(),
  first_name: varchar({ length: 200 }).notNull(),
  last_name: varchar({ length: 200 }).notNull(),
  email: varchar({ length: 200 }).unique().notNull(),
  password: varchar({ length: 255 }).notNull(),
  gender_id: bigint({ mode: 'number' })
    .default(1)
    .notNull()
    .references(() => gendersTable.id),
});

export const usersRelations = relations(usersTable, ({ one }) => ({
  gender: one(gendersTable, {
    fields: [usersTable.gender_id],
    references: [gendersTable.id],
  }),
}));
