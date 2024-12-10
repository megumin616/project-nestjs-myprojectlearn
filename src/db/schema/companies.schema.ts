import { relations } from 'drizzle-orm';
import {
  mysqlTable,
  bigint,
  varchar,
  timestamp,
  text,
} from 'drizzle-orm/mysql-core';
import { financeTable } from './finance.schema';

export const companyTable = mysqlTable('companies', {
  id: bigint({ mode: 'bigint' }).primaryKey().autoincrement().notNull(),
  name: varchar({ length: 255 }).notNull(),
  description: text(),
  registration_number: varchar({ length: 100 }).unique().notNull(),
  address: text().notNull(),
  phone: varchar({ length: 15 }).notNull(),
  email: varchar({ length: 200 }).unique().notNull(),
  website: varchar({ length: 255 }),
  created_at: timestamp().defaultNow().notNull(),
  updated_at: timestamp()
    .$onUpdate(() => new Date())
    .defaultNow(),
});

export const companyRelations = relations(companyTable, ({ one }) => ({
  finance: one(financeTable, {
    fields: [companyTable.id],
    references: [financeTable.company_id],
  }),
}));
