import type { HttpContext } from '@adonisjs/core/http'

export default class ContactsController {
  public async index({ view }: HttpContext) {
    return view.render('pages/add-contact')
  }
  public async store({ request, response }: HttpContext) {
    const { firstName, lastName, company, jobTitle, phone, email, address } = request.all()
    console.log(firstName, lastName, company, jobTitle, phone, email, address)
    return response.redirect('/')
  }
}
