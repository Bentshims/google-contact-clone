import { BaseSchema } from "@adonisjs/lucid/schema"

export default class extends BaseSchema {
  protected tableName = 'addresses'

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

      table.enum('address_type', ['home', 'work', 'other']).notNullable()
      table.string('address', 255).notNullable()
      table.string('city', 255).notNullable()
      table.string('country', 255).notNullable()

      table.timestamps(true, true)
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
