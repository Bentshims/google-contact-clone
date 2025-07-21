import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo } from '@adonisjs/lucid/orm'
import Contact from './contact.js'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'

export default class Address extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column() 
  declare contactId: number

  @column()
  declare type: 'home' | 'work' | 'other'

  @column()
  declare address: string

  @column()
  declare city: string

  @column()
  declare country: string

  @belongsTo(() => Contact)
  declare contact: BelongsTo<typeof Contact>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
