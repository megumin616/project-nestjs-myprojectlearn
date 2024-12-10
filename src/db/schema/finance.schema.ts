import {
  bigint,
  mysqlTable,
  varchar,
  decimal,
  timestamp,
} from 'drizzle-orm/mysql-core';
import { companyTable } from './companies.schema';
import { relations } from 'drizzle-orm';

export const financeTable = mysqlTable('finance', {
  id: bigint({ mode: 'bigint' }).primaryKey().autoincrement().notNull(), // Primary Key
  company_id: bigint({ mode: 'bigint' })
    .notNull()
    .references(() => companyTable.id), // Foreign Key อ้างอิงไปยัง companyTable
  fiscal_year: varchar({ length: 10 }).notNull(), // ปีงบประมาณ (เช่น "2024")
  total_revenue: decimal({ precision: 20, scale: 2 }).notNull(), // รายได้รวม
  /* decimal
        ความหมาย: ใช้สำหรับการกำหนดคอลัมน์ที่จัดเก็บค่าตัวเลขแบบทศนิยม 
        precision: จำนวนหลักทั้งหมด (ทั้งก่อนและหลังจุดทศนิยม)
        scale: จำนวนหลักหลังจุดทศนิยม */
  total_expenses: decimal({ precision: 20, scale: 2 }).notNull(), // ค่าใช้จ่ายรวม
  net_profit: decimal({ precision: 20, scale: 2 }).notNull(), // กำไรสุทธิ
  assets: decimal({ precision: 20, scale: 2 }).notNull(), // ทรัพย์สินรวม
  liabilities: decimal({ precision: 20, scale: 2 }).notNull(), // หนี้สินรวม
  equity: decimal({ precision: 20, scale: 2 }).notNull(), // ส่วนของผู้ถือหุ้น
  created_at: timestamp().defaultNow().notNull(), // วันที่สร้างข้อมูล
  updated_at: timestamp()
    .$onUpdate(() => new Date())
    .defaultNow(), // วันที่แก้ไขล่าสุด
});

export const financeRelations = relations(financeTable, ({ one }) => ({
  company: one(companyTable, {
    fields: [financeTable.company_id],
    references: [companyTable.id],
  }),
}));
