const http = require('node:http')//<-- protocolo http
const { findAvailablePort } = require('./10.free-port.js')

const desiredPort = process.env.PORT ?? 3000 //<-- en terminal --> $env:PORT=1234; node 9.http.js <-- para ejecutarlo

const server = http.createServer((req, res) => {
  console.log('request received')
  res.end('Hola mundo')
})

findAvailablePort(desiredPort).then(port => {
  server.listen(port, () => {
    console.log(`Server listening on port http://localhost:${port}`)
  })
})


// !SERVER 0 SOLAMENTE EN MODO DESARROLLO
// server.listen(0, () => { // <-- 0 es un puerto aleatorio DISPONIBLE, asi evitamos errores de puerto ocupado.
// 	console.log(`Server listening on port http://localhost:${server.address().port}`) //<-- server.address().port nos da el puerto que se asigno aleatoriamente
// })