import { Database, DataTypes, Model, PostgresConnector } from "denodb/mod.ts";

const connector = new PostgresConnector({
  database: "timekeeping",
  host: "localhost",
  username: "postgres",
  password: "postgres",
});

const db = new Database(connector);

class Person extends Model {
  static table = "person";

  static fields = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },

    firstName: DataTypes.string(50),
    lastName: DataTypes.string(50),
  };
}

db.link([Person])

export { db as DB, Person };
