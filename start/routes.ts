/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import { middleware } from './kernel.js'

router.get('/login', '#controllers/auth_controller.showLogin')
router.post('/login', '#controllers/auth_controller.login')
router.get('/signup', '#controllers/auth_controller.showSignup')
router.post('/signup', '#controllers/auth_controller.signup')

router.group(() => {
    router.get('/','#controllers/users_controller.index').as('home')
    router.resource('/addContact', '#controllers/contacts_controller')
}).use(middleware.auth())