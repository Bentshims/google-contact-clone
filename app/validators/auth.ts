import vine from '@vinejs/vine'

export const signupValidator = vine.compile(
  vine.object({
    fullName: vine.string().minLength(3).maxLength(255),
    email: vine.string().email().minLength(3).maxLength(255),
    password: vine.string().minLength(8).maxLength(255).alphaNumeric(),
  })
)

export const loginValidator = vine.compile(
    vine.object({
      email: vine.string().email().minLength(3).maxLength(255),
      password: vine.string().minLength(8).maxLength(255).alphaNumeric(),
    })
  )