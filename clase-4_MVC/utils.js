//import movies from './movies.json' with { type: 'json' }// -> //! EXPERIMENTAL ✔
//Para leer un JSON en ESModule:

import { createRequire } from 'node:module'
const require = createRequire(import.meta.url)
export const readJSON = (path) => require(path)
