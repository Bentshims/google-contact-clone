import { BaseSchema } from "@adonisjs/lucid/schema"

export default class extends BaseSchema {
  protected tableName = 'phones'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table
        .integer('contact_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('contacts')
        .onDelete('CASCADE')

      table.string('phone_number', 20).notNullable()
      table.enum('phone_type', ['mobile', 'home', 'work', 'fax', 'other']).notNullable()

      table.timestamps(true, true)
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}

