import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";

import "dotenv/config";

const connection = mysql.createPool({
  host: "localhost",
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: Number(3306),
});

export const db = drizzle(connection);