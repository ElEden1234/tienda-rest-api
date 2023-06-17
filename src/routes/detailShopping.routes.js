import { Router } from 'express'
import { getShopping } from '../controllers/detailShopping.controller.js'
export const routerDetailShopping = Router()

routerDetailShopping.get('/shopping/:id', getShopping)
