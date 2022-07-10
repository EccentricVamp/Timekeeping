import { Database, PostgresConnector } from "denodb/mod.ts";

const connector = new PostgresConnector({
  database: "timekeeping",
  host: "localhost",
  username: "postgres",
  password: "postgres",
});

export const db = new Database(connector);
