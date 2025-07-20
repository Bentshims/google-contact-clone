import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'contacts'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('user_id').references('id').inTable('users').onDelete('CASCADE').unsigned().notNullable()
      table.string('first_name')
      table.string('last_name')
      table.string('company')
      table.string('job_title')
      table.json('city').nullable().defaultTo([])
      table.json('country').nullable().defaultTo([])
      table.string('avatar').nullable()
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
