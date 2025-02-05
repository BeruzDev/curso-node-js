const fs = require('node:fs')

// readdir es un método que nos permite leer el contenido de un directorio
fs.readdir('.', (err, files) => {
  if (err) {
    console.error('Error al leer el directorio')
    return
  }

  files.forEach((file) => {
    console.log(file)
  })
})
