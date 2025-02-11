const z = require('zod') //<-- paquete npm para validar los tipos de datos recibidos

// Validar los tipos de datos con 'zod'
// Creamos un esquema de los datos que vamos a recibir (json) y especificamos tipo de dato e introducimos un mensaje de error si es necesario
const movieSchema = z.object({
		title: z.string({ //<-- tipo de dato (string)
			invalid_type_error: 'Movie title must be a string', //<-- mensaje personalizado
			required_error: 'Movie title is required.' //<-- error si es requerido, etc.
		}),
		year: z.number().int().min(1900).max(2025),
		director: z.string(),
		duration: z.number().int().positive(),
		rate: z.number().min(0).max(10).default(5),
		poster: z.string().url({
			message: 'Poster must be a valid URL'
		}),
		genre: z.array(
			z.enum(['Action', 'Adventure', 'Comedy', 'Drama', 'Sci-Fi', 'Fantasy', 'Biography']),
			{
				required_error: 'Movie genre is required,',
				invalid_type_error: 'Movie genre must be an array of enum Genre.'
			}
		)
})

function validateMovie(object){
	return movieSchema.safeParse(object) //<-- Safe parse devuelve un objeto resuelto y te dice si hay datos o no
}

function validationPartialMovie(object){
	return movieSchema.partial().safeParse(object)
}

module.exports = {
	validateMovie,
	validationPartialMovie
}