// Importamos todos los módulos necesarios
const express = require('express')
const ditto = require('./pokemon/ditto.json')

// Asignamos un puerto si no hay una variable de entorno
const PORT = process.env.PORT ?? 1234

// Se crea una  "app" de express
const app = express()
app.disable('x-powered-by') //<-desactiva la cabecera X-Powered-By	para que no se muestre en las respuestas

app.use(express.json())
 // Middleware -> funciones que se ejecutan entre la petición y la respuesta
// app.use((req, res, next) => {  //<- también se puede apuntar a un endpoint concreto -> app.use('/pokemon', (req, res, next) =>{
//   if (req.method !== 'POST') return next()
//   if (req.headers['content-type'] !== 'application/json') return next()

  // Aquí solo llegan request que son POST y que tienen el header Content-Type: application/json
//   let body = ''

//   req.on('data', (chunk) => {
//     body += chunk.toString()
//   })

//   req.on('end', () => {
//     const data = JSON.parse(body)
//     data.timestamp = Date().toString()
     //Mutar la request y meter la info en el req.body
//     req.body = data
//     next()
//   })
// })

// 1.Peticiones GET
app.get('/pokemon/ditto', (req, res) => {
  res.json(ditto)
})

// 2.Peticiones POST
app.post('/pokemon', (req, res) => {
	// El req.body debería guardarse en bbdd
  res.status(201).json(req.body)
})

// 3.Petición para manejar errores 404
app.use((req, res) => {
  res.status(404).send('<h1>404 Not Found</h1>')
})

// Mensaje para ver en que puerto esta corriendo el servidor
app.listen(PORT, () => {
  console.log(`server running on port http://localhost:${PORT}`)
})
