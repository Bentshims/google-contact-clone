import type { HttpContext } from '@adonisjs/core/http'
import { contactValidator } from '../validators/contact.js'
import Contact from '../models/contact.js'

export default class ContactsController {
  public async index({ view }: HttpContext) {
    return view.render('pages/add-contact')
  }
  public async store({ request, response }: HttpContext) {
    const { firstName, lastName, company, jobTitle, phones, phoneTypes, emails, emailTypes, addresses, cities, countries, addressTypes } = await request.validateUsing(contactValidator)
    const contact = await Contact.create({
      firstName,
      lastName,
      company,
      jobTitle,
      phones,
      phoneTypes,
      emails,
      emailTypes,
      addresses,
      cities,
      countries,
      addressTypes,
    })
    console.log(contact)
    return response.redirect('/')
  }
}
