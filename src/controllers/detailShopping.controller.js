import { connection } from '../conexion.js'

export const getShopping = async (req, res) => {
  const idUser = req.params.id
  const [products] = await connection.query(
    `select dc.id, count(dp.producto_id) numero_productos, dc.fecha_creacion, sum(dp.cantidad*p.precio) total from detalle_compra dc inner join detalle_producto dp on dc.detalle_id = dp.id inner join productos p on dp.producto_id = p.id where usuario_id = ${idUser} group by dc.id`
  )
  res.json(products)
}
