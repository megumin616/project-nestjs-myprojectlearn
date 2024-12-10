import { defineConfig } from "drizzle-kit";

import "dotenv/config";

export default defineConfig({
  dialect: "mysql",
  schema: "./src/db/schema/*.schema.ts",
  out: "./src/db/migrations",
  dbCredentials: {
    host: "localhost",
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: Number(3306),
  },

  migrations: {
    prefix: "timestamp",
    table: "__drizzle_migrations",
  },
});