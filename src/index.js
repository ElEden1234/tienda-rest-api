// Hacemos las importaciones
import express from 'express'
import { routerUser } from './routes/usuarios.routes.js'
import { routerProducts } from './routes/productos.routes.js'
import { routerDetailProducts } from './routes/detailProducts.routes.js'
import { routerDetailShopping } from './routes/detailShopping.routes.js'
import cors from 'cors'

// Iniciamos la aplicacion
const app = express()

app.use(cors())
app.use(express.json())

// Rutas
app.use(routerUser)
app.use(routerProducts)
app.use(routerDetailProducts)
app.use(routerDetailShopping)

app.listen(3000)
console.log('El servidor esta corriendo http://localhost:3000')
