import type { HttpContext } from '@adonisjs/core/http'
import { contactValidator } from '../validators/contact.js'

export default class ContactsController {
  public async index({ view }: HttpContext) {
    return view.render('pages/add-contact')
  }
  public async store({ request, response }: HttpContext) {
    const { firstName, lastName, company, jobTitle, phones, phoneTypes, emails, emailTypes, addresses, cities, countries, addressTypes } = await request.validateUsing(contactValidator)
    console.log(firstName, lastName, company, jobTitle, phones, phoneTypes, emails, emailTypes, addresses, cities, countries, addressTypes)
    return response.redirect('/')
  }
}
