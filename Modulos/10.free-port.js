//Aplicación para encontrar un puerto libre en el sistema

const net = require('node:net')//<-- protocolo tcp/ip

function findAvailablePort(desiredPort){
	return new Promise((resolve, reject) => {
		const server = net.createServer()
		server.listen(desiredPort, () => {
			const port = server.address().port
			server.close(() => {
				resolve(port)
			})
		})
		server.on('error', (err) => {
			if(err.code === 'EADDRINUSE'){
				findAvailablePort(0).then(port => resolve(port))
			}else{
				reject(err)
			}
		})
	})
}

//uso de la función:
// findAvailablePort(3008).then(port => {
// 	server.listen(port, () => {
// 		console.log(`Server listening on port http://localhost:${port}`)
// 	})
// })

module.exports = { findAvailablePort }