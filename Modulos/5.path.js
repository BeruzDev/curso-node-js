const path = require('node:path')

// -> unix /
// -> windows \
console.log(path.sep) // <-- indica el separador de carpetas en tu sistema operativo

//unir rutas con path.join sin necesidad de ponerlas manualmente
const filePath = path.join('/content', 'subfolder', 'test.txt')
console.log(filePath);

//obtener el nombre base del archivo
const base = path.basename('/content/subfolder/test.txt')
console.log(base);

//obtener el nombre solamente sin la extension
const filename = path.basename('/content/subfolder/test.txt', '.txt')
console.log(filename);

//obtener la extension del archivo
const ext = path.extname('/content/subfolder/test.txt')
console.log(ext);

//obtener la ruta absoluta
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')    // <-- __dirname es una variable global que indica la ruta actual
console.log(absolute);
