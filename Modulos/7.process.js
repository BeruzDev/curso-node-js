// process es un objeto global que provee información y control sobre el proceso de Node.js. Como un objeto global, no es necesario usar require() para configurar. Proporciona una serie de propiedades y métodos para controlar el proceso de Node.js. Puede ser accedido desde cualquier lugar del código y se puede usar para obtener información sobre el proceso actual, como la versión de Node.js, la arquitectura del sistema, el uso de la memoria, etc.

//argumentos de entrada
//* console.log(process.argv);

//controlar el proceso y su salida
//* process.exit(1); // 0 es el valor por defecto, 1 es un error

//controlar eventos del proceso
//* process.on('exit', () => {
     //limpiar los recursos 
//* })

//current working directory
console.log(process.cwd());

//platform information (variables de entorno)
console.log(process.env);