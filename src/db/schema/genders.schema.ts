import { relations } from "drizzle-orm";
import { bigint, mysqlTable, timestamp, varchar } from "drizzle-orm/mysql-core";
import { usersTable } from "./users.schema";

export const gendersTable = mysqlTable("genders", {
    id: bigint({ mode: "bigint" }).primaryKey().autoincrement().notNull(),
    gender_name: varchar({ length: 20 }).notNull(),
    created_at: timestamp(),
})

export const gendersRelations = relations(gendersTable, ({ many }) => ({
    users: many(usersTable)
}))