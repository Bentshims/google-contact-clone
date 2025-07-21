import type { HttpContext } from '@adonisjs/core/http'
import User from '../models/user.js'
import { loginValidator, signupValidator } from '../validators/auth.js'


export default class AuthController {

    public async showLogin({ view }: HttpContext) {
        return view.render('pages/security/login')
    }

    public async showSignup({ view }: HttpContext) {
        return view.render('pages/security/signup')
    }
    
    public async login({ request, response, auth }: HttpContext) {
        const { email, password } = await request.validateUsing(loginValidator)
        //  * Step 2: Verify credentials
        const user = await User.verifyCredentials(email, password)
        //  * Step 3: Login user
        await auth.use('web').login(user)
       
        return response.redirect('/')
    }

    public async signup({ request, response, auth }: HttpContext) {
        const { fullName, email, password } = await request.validateUsing(signupValidator)
        const user = await User.create({ fullName, email, password })
        await auth.use('web').login(user)
        return response.redirect('/')
    }
}