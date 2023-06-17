import { connection } from '../conexion.js'

export const getAllProducts = async (req, res) => {
  const [allProducts] = await connection.query('select * from productos')
  res.json(allProducts)
}
