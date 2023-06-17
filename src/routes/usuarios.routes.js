import { Router } from 'express'
import { registerUser, loginUser, getUser } from '../controllers/usuarios.controllers.js'

export const routerUser = Router()

routerUser.post('/register/user', registerUser)
routerUser.post('/login/user', loginUser)
routerUser.post('/validate/user', getUser)
