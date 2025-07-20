import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'contacts'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('first_name')
      table.string('last_name')
      table.string('company')
      table.string('job_title')
      table.json('phones').nullable().defaultTo([])
      table.json('emails').nullable().defaultTo([])
      table.json('addresses').nullable().defaultTo([])
      table.json('cities').nullable().defaultTo([])
      table.json('countries').nullable().defaultTo([])
      table.string('avatar').nullable()
      table.json('phone_types').nullable().defaultTo([])
      table.json('email_types').nullable().defaultTo([])
      table.json('address_types').nullable().defaultTo([])

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
