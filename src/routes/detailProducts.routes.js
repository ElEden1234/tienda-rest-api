import { Router } from 'express'
import { buyProducts } from '../controllers/detailProducts.controller.js'
export const routerDetailProducts = Router()

routerDetailProducts.post('/buyProducts', buyProducts)
