import { connection } from '../conexion.js'

export const buyProducts = async (req, res) => {
  const [data] = await connection.query('select distinct id from detalle_producto')
  const longitud = data.length + 1
  const [user, products] = req.body
  const insertar = async (valor) => {
    await connection.query(`call insertar_detalle_producto(${longitud},${valor.id},${valor.cantidad})`)
  }
  products.forEach(insertar)
  await connection.query(`call insertar_detalle_compra(${user.id},${longitud})`)
}
