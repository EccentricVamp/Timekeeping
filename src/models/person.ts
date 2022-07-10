import { Model, DataTypes } from "denodb/mod.ts";

export class Person extends Model {
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
