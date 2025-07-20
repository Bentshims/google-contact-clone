import vine from '@vinejs/vine'


export const contactValidator = vine.compile(
  vine.object({
    firstName: vine.string().minLength(3),
    lastName: vine.string().minLength(3),
    company: vine.string().minLength(3),
    jobTitle: vine.string().minLength(3),

    phones: vine.array(vine.string().mobile({ locale: ["fr-CA"] }).minLength(10).maxLength(10)),
    phoneTypes: vine.array(vine.enum(['mobile', 'home', 'work', 'fax', 'other'] as const)),

    emails: vine.array(vine.string().email()),
    emailTypes: vine.array(vine.enum(['home', 'work', 'other'] as const)),

    addresses: vine.array(vine.string().minLength(3).maxLength(255)),
    cities: vine.array(vine.string().minLength(3).maxLength(255)),
    countries: vine.array(vine.string().minLength(3).maxLength(255)),
    addressTypes: vine.array(vine.enum(['home', 'work', 'other'] as const)),
  })
)
