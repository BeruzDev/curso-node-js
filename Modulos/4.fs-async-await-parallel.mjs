import { readFile } from 'node:fs/promises'; // <-- importamos el modulo de fs con promises

//en parallel es mucho más rápido ya que son dos procesos a la vez en lugar de uno después del otro

//creamos las promesas que queramos

Promise.all([
    readFile('./archivo.txt', 'utf-8'),
    readFile('./archivo2.txt', 'utf-8')
]).then(([text, secondText]) => {
    console.log('\t -->primer texto \n', text);
    console.log('\t -->segundo texto \n', secondText);
})

