const http = require('node:http')
const fs = require('node:fs')

const desiredPort = process.env.PORT ?? 1234

const processRequest = (req, res) => {
  console.log('request received: ', req.url) //<-- vemos las peticiones(req) que llegan al servidor
  res.end('Hola mundo') //<-- respondemos(res) a las peticiones con un mensaje, (se muestra en el navegador)
}

const processRequestTwo = (req, res) => {
  res.setHeader('Content-Type', 'text/html; charset=utf-8')

  if (req.url === '/') {
    res.end('<h3>Bienvenido a mi página de inicio!<h3>')
  } else if (req.url === '/imagen') {
    fs.readFile('./about-img.png', (err, data) => {
      if (err) {
        res.statusCode = 500
        res.end('<h3>500 - Internal Server Error</h3>')
      } else {
        res.setHeader('Content-Type', 'image/png')
        res.end(data)
      }
    })
  } else if (req.url === '/contacto') {
    res.end('<h3>Aquí puedes contactarme<h3>')
  } else {
    res.statusCode = 404 //<--Not Found
    res.end('<h3>404 - Not Found</h3>')
  }
}

const server = http.createServer(processRequestTwo)

server.listen(desiredPort, () => {
  console.log(`Server listening on port http://localhost:${desiredPort}`)
})

//STATUS CODE
//? 100 - 199: Información
//* 200 - 299: Éxito
//? 300 - 399: Redirección
//! 400 - 499: Error del cliente
//! 500 - 599: Error del servidor

// http.cat -> errores ilustrados
//* 200 -> OK
//? 301 -> Moved Permanently
//! 400 -> Bad Request
//! 404 -> Not Found
//! 500 -> Internal Server Error
