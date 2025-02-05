// .js -> por defecto utiliza CommonJS
// .mjs -> por defecto utiliza ES Modules
// .cjs -> por defecto utiliza CommonJS

import {sum, res, mul} from './sum.mjs';


console.log(sum(1, 2)); 
console.log(res(1, 2));
console.log(mul(1, 2));