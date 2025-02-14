import { Router } from 'express'
import { validateMovie, validationPartialMovie } from './schemas/movies.js'
import { MovieModel } from '../models/movie.js'

export const moviesRouter = Router()

moviesRouter.get('/', async (req, res) => {
  const { genre } = req.query
  const movies = await MovieModel.getAll({ genre })
  return res.json(movies)
})
/*---------------------------------------------------------------------------------------*/
moviesRouter.get('/:id', async (req, res) => {
  const { id } = req.params
  const movie = await MovieModel.getById({ id })
  if (movie) return res.json(movie)
  res.status(404).json({ message: 'Movie not found' })
})
/*---------------------------------------------------------------------------------------*/
moviesRouter.post('/', async (req, res) => {
  const result = validateMovie(req.body)
  if (result.error) {
    return res.status(400).json({ error: JSON.parse(result.error.message) })
  }
  const newMovie = await MovieModel.create({ input: result.data })
  res.status(201).json(newMovie)
})
/*---------------------------------------------------------------------------------------*/
moviesRouter.patch('/:id', async (req, res) => {
  const result = validationPartialMovie(req.body)

  if (!result.success) {
    return res.status(404).json({ error: JSON.parse(result.error.message) })
  }

  const { id } = req.params

  const updateMovie = await MovieModel({ id, input: result.data })

  return res.json(updateMovie)
})
/*---------------------------------------------------------------------------------------*/
moviesRouter.delete('/:id', async (req, res) => {
  const { id } = req.params
  const result = await MovieModel.delete({ id })
  if (result === false) {
    return res.status(404).json({ message: 'Movie not found' })
  }
  return res.json({ message: 'Movie deleted' })
})

// PATCH // Actualizar parcialmente un elemento
// PUT // Actualizar totalmente un elemento ya existente o crearlo si no existe
//Para métodos complejos añadir cabecera OPTIONS
// app.options('/movies/:id', (req, res) => {
//   const origin = req.header('origin')
//   if (ACCEPTED_ORIGINS.includes(origin) || !origin) {
//     res.header('Access-Control-Allow-Origin', origin) // hay que indicar el origen
//     res.header('Access-Control-Allow-Methods', 'GET', 'POST', 'PATCH', 'DELETE') //y ademas hay que indicar el método permitido
//   }
//   res.send(200)
// })
