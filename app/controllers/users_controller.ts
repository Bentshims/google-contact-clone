import type { HttpContext } from '@adonisjs/core/http'

export default class UsersController {
    public async index({view, auth}: HttpContext) {
        // const user = auth.user!
        // const contacts = await user.related('contacts').query()
       return view.render('pages/home'/** */)
    }
}