import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, hasMany } from '@adonisjs/lucid/orm'
import User from './user.js'
import Phone from './phone.js'
import Email from './email.js'
import Address from './address.js'

import type { BelongsTo, HasMany } from '@adonisjs/lucid/types/relations'

export default class Contact extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare userId: number

  @column()
  declare firstName: string

  @column()
  declare lastName: string

  @column()
  declare company: string

  @column()
  declare jobTitle: string

  @column()
  declare avatar: string

  // ✅ Relation avec User
  @belongsTo(() => User)
  declare user: BelongsTo<typeof User>

  // ✅ Relations avec les sous-modèles
  @hasMany(() => Phone)
  declare phones: HasMany<typeof Phone>

  @hasMany(() => Email)
  declare emails: HasMany<typeof Email>

  @hasMany(() => Address)
  declare addresses: HasMany<typeof Address>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
