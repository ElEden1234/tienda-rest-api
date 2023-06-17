import { Router } from 'express'
import { getAllProducts } from '../controllers/productos.controller.js'

export const routerProducts = Router()

routerProducts.get('/productos', getAllProducts)
