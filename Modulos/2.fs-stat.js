//fs -> file system
const fs = require('node:fs')// a partir de Node 16, se recomienda poner 'node:'

const stats = fs.statSync('./archivo.txt')

//Sync -> sincronizado
console.log(
    stats.isFile(), //si es un archivo
    stats.isDirectory(), //si es un directorio
    stats.isSymbolicLink(), //si es un enlace simbólico
    stats.size //tamaño del archivo en bytes
);