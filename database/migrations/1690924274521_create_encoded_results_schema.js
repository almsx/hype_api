"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class CreateUserInfosSchema extends Schema {
  up() {
    this.create("user_infos", (table) => {
      table.increments("user_info_id");
      table.string("first_name", 50).notNullable();
      table.string("last_name", 50).notNullable();
      table.integer("user_id").notNullable(); // Cambiamos el nombre del campo id a user_id
      table.timestamps();
    });
  }

  down() {
    this.drop("user_infos");
  }
}

module.exports = CreateUserInfosSchema;
