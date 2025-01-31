//Creamos el modulo con promesas de la siguiente manera:
//Esto solo en los módulos nativos que no tienen promesas nativas
// const { promisify } = require('node:util');// <-- importamos la promesa del modulo de util si no existiera el '/promises' en el modulo que estamos importando
// const readFilePromise = promisify(fs.readFile);// <-- creamos la promesa del método readFile

//----------------------------------------------------------------------------------------------------------------------------------------------------
const { readFile } = require ('node:fs/promises'); // <-- importamos el modulo de fs con promises

async function init() {
    console.log('Leyendo el primer archivo...')
    const text = await readFile('./archivo.txt', 'utf-8')
    console.log('\t -->primer texto \n', text);

    console.log('Hacer otra cosa mientras se lee el archivo...')

    console.log('Leyendo el segundo archivo...')
    const secondText = await readFile('./archivo2.txt', 'utf-8')
    console.log('\t -->segundo texto \n', secondText);
}

init() // <-- llamamos a la función init
