//hola que talimport express from 'express'
import dotenv from 'dotenv'
/* esto tiene que borrarlo */import { PORT } from './config.js'

import { UserRepository } from './user-repository.js' //localhost:3000'
//localhost:3000' 
dotenv.config()

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello Beruz!!')
})

app.post('/login', (req, res) => {})

app.post('/register', async (req, res) => {
  const { username, password } = req.body
  console.log(req.body)

  try {
    const id = await UserRepository.create({ username, password })
    res.send({ id })
  } catch (error) {
    res.status(400).send(error.message)
  }
})

app.post('/logout', (req, res) => {})

app.get('/protected', (req, res) => {})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

//comentario de prueba
const api_url = 'http //localhost:3000'