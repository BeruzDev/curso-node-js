// Objective: create a simple API with Express

// 1. Import the express module HTTP
const http = require('node:http')
const dittoJSON = require('./pokemon/ditto.json')

// 2. Automatically process the request
const processRequest = (req, res) => {
  const method = req.method
  const url = req.url

  switch (method) {
    case 'GET':
      switch (url) {
        case '/pokemon/ditto':
          res.setHeader('Content-Type', 'application/json; charset=utf-8')
          res.end(JSON.stringify(dittoJSON))
          break
				default:
          res.statusCode = 404
          res.setHeader('Content-Type', 'text/html; charset=utf-8')
          res.end('<h3>404 - Not Found</h3>')
          break
      }

    case 'POST':
      switch (url){
        case '/pokemon':
          //Escuchar el evento data
          let body = '' //<-- Variable para almacenar la data
          req.on('data', chunk => { //<-- Escuchar el evento data y guardar en chunks
            body += chunk.toString() //<-- Convertir el chunk a string y guardarlo en body
          })
          //Acaba de escuchar el evento data
          req.on('end', () => {
            const data = JSON.parse(body)
            //Podríamos hacer muchas cosas como por ejemplo llamar a una bbdd para guardar info
            res.writeHead(201, {'Content-Type': 'application/json; charset=utf-8'}) //<-- Status code 201(RECURSO CREADO)
            data.timestamp = new Date().toISOString()
            res.end(JSON.stringify(data))
          })
          break
        default:
          res.statusCode = 404
          res.setHeader('Content-Type', 'text/html; charset=utf-8')
          res.end('<h3>404 - Not Found</h3>')
          break
      }
  }
}

// 3. Create the server
const server = http.createServer(processRequest)

// 4. Server listen
server.listen(1234, () => {
  console.log('server listening on port http://localhost:1234')
})
