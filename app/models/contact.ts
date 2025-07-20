import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Contact extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare firstName: string

  @column()
  declare lastName: string

  @column()
  declare company: string

  @column()
  declare jobTitle: string

  @column()
  declare phones: string[]

  @column()
  declare emails: string[]

  @column()
  declare addresses: string[]

  @column()
  declare cities: string[]

  @column()
  declare countries: string[]

  @column()
  declare avatar: string

  @column()
  declare phoneTypes: string[]

  @column()
  declare emailTypes: string[]

  @column()
  declare addressTypes: string[]

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
