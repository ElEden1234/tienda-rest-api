/* eslint-disable camelcase */
import { connection } from '../conexion.js'
import bcryptjs from 'bcryptjs'

export const registerUser = async (req, res) => {
  const { nombre, correo, direccion, telefono, contraseña } = req.body
  const contraseñaHash = await bcryptjs.hash(contraseña, 8)
  const [result] = await connection.query(`insert into usuarios (nombre, correo, direccion, telefono, contraseña) values ('${nombre}','${correo}','${direccion}','${telefono}','${contraseñaHash}')`)
  const [data] = await connection.query(`select * from usuarios where id=${result.insertId}`)
  res.json(data[0])
}

export const loginUser = async (req, res) => {
  const { correo, contraseña } = req.body
  const [data] = await connection.query(`select * from usuarios where correo = '${correo}'`)
  if (!data.length > 0) return res.json(null)
  const correctPassword = await bcryptjs.compare(contraseña, data[0].contraseña)
  if (!correctPassword) return res.json(null)
  res.json(data[0])
}

export const getUser = async (req, res) => {
  const { correo } = req.body
  const [data] = await connection.query(`select * from usuarios where correo = '${correo}'`)
  return data.length > 0 ? res.json(true) : res.json(false)
}
