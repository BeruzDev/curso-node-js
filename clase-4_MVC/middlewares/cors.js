import cors from 'cors'
//Podemos tener los puertos y dominios que queremos que acepte nuestra API para prevenir errores CORS
const ACCEPTED_ORIGINS = [
  'http://localhost:8080',
  'http://localhost:1234',
  'http://movies.com',
  'http://midu.dev',
]
export const corsMiddleware = ({ acceptedOrigins = ACCEPTED_ORIGINS } = {}) =>
  cors({
    origin: (origin, callback) => {
      if (acceptedOrigins.includes(origin) || !origin) {
        return callback(null, true)
      }

      return callback(new Error('Not allowed by CORS'))
    },
  })
