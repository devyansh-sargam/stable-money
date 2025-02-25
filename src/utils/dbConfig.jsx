import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";
const sql = neon(
  "postgresql://stable-money:npg_BdVhKZyapo46@ep-tight-term-a12afy77-pooler.ap-southeast-1.aws.neon.tech/test%20database?sslmode=require"
);
export const db = drizzle(sql, { schema });