const fs = require ('node:fs');

//async -> asíncrono
//Leer un archivo de forma asíncrona (paralela, al mismo tiempo)
console.log('Leyendo el primer archivo...');
fs.readFile('./archivo.txt', 'utf-8', (err, text) => { // <-- cuando te avise ejecuta este callback
    console.log('-->primer texto \n', text);
});

console.log('Hacer otra cosa mientras se lee el archivo...');

console.log('Leyendo el segundo archivo...');
fs.readFile('./archivo2.txt', 'utf-8', (err, text) => {
    console.log('-->segundo texto \n', text);
});

//Sync -> sincronizado
//Leer un archivo de forma sincronizada (secuencial, una linea tras otra)
/*console.log('Leyendo el primer archivo...');
const text = fs.readFileSync('./archivo.txt', 'utf-8');

console.log(text);

console.log('Leyendo el segundo archivo...');
const secondText = fs.readFileSync('./archivo2.txt', 'utf-8');

console.log(secondText);*/