import { Database, PostgresConnector } from "denodb/mod.ts";
import { Person } from "@models/person.ts"

const connector = new PostgresConnector({
  database: "timekeeping",
  host: "localhost",
  username: "postgres",
  password: "postgres",
});

const db = new Database(connector);

db.link([Person]);
