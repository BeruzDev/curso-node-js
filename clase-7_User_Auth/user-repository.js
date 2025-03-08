import DBLocal from 'db-local'
import bcrypt from 'bcrypt'
import crypto from 'node:crypto'
import { SALT_ROUNDS } from './config.js'
const { Schema } = new DBLocal({ path: './db' })

// Esquema de datos
const User = Schema('User', {
  _id: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
})

export class UserRepository {

	// Registrar User
  static async create({ username, password }) {
    //1. Validaciones de username y password (opcional: usar zod)
    if (typeof username !== 'string')
      throw new Error('username must be a string')
    if (username.length < 3)
      throw new Error('username must be at least 3 characters long')

    if (typeof password !== 'string')
      throw new Error('password must be a string')
    if (password.length < 6)
      throw new Error('password must be at least 6 characters long')

    //2. Asegurarse que el username no se repite
    const user = User.findOne({ username })
    if (user) throw new Error('username already exists')

		//3. Generamos un random universal unique identifier
		const id = crypto.randomUUID()
		
		//4 Hashear la password
		const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS) // -> hashSync -> bloquea el thread principal
		//const hashedPassword = bcrypt.hashSync(password, SALT_ROUNDS) // -> hashSync -> bloquea el thread principal

		//4. Creamos un nuevo usuario con esta id
		User.create({
			_id: id,
			username,
			password: hashedPassword
		}).save()

		return id
  }

	// Logear User
  static login({ username, password }) {
		
	}
}
