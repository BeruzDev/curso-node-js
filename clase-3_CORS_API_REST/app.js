const express = require('express')
const crypto = require('node:crypto')
const { validateMovie } = require('./schemas/movies')
const { validationPartialMovie } = require('./schemas/movies')
const movies = require('./movies.json')

const app = express()
app.use(express.json())
app.disable('x-powered-by')

/*---------------------------------------------------------------------------------------*/

// GET // Los recursos que sean MOVIES se identifican como /movies 
app.get('/movies', (req, res) => {
  const { genre, director, year } = req.query

  if (genre) {
    //<-- Por genero
    const filteredMoviesByGenre = movies.filter((movie) =>
      movie.genre.some((g) => g.toLowerCase() === genre.toLocaleLowerCase())
    )
    return res.json(filteredMoviesByGenre)
  } else if (director) {
    //<-- Por director
    const filteredMoviesByDirector = movies.filter(
      (movie) =>
        movie.director?.toLocaleLowerCase().replace(/\s+/g, '') ===
        director.toLowerCase().replace(/\s+/g, '')
    )
    return res.json(filteredMoviesByDirector)
  } else if (year) {
    //<-- Por año
    const filteredMoviesByYear = movies.filter(
      (movie) => movie.year === Number(year)
    )
    return res.json(filteredMoviesByYear)
  } else {
    return res.json(movies)
  }
})

// Recuperar por id
app.get('/movies/:id', (req, res) => {
  // path-to-regexp
  const { id } = req.params//-> De los parámetros que hay en el body recoger el ID 
  const movie = movies.find((movie) => movie.id === id)
  if (movie) return res.json(movie)
  res.status(404).json({ message: 'Movie not found' })
})

/*---------------------------------------------------------------------------------------*/

// POST //Crear un nuevo elemento
app.post('/movies', (req, res) => {
  //Lo que se espera que envíe el frontend
  const result = validateMovie(req.body)

  if (result.error) {
    return res.status(400).json({ error: JSON.parse(result.error.message) })
  }

  // Lo que se va a crear en el backend -> en BBDD next class!
  const newMovie = {
    id: crypto.randomUUID(), //<--express tiene este modulo para crear id de forma nativa -> Universal Unique IDentifier
    ...result.data, // <-- todos los datos validados
  }

  //!  -> solo para verlo ahora
  movies.push(newMovie)

  //! SIEMPRE indicar que se ha creado el recurso
  res.status(201).json(newMovie) //<--Actualiza la cache del cliente -> en este caso con la nueva id creada con crypto.randomUUID
})

/*---------------------------------------------------------------------------------------*/

// PATCH // Actualizar parcialmente un elemento
app.patch('/movies/:id', (req, res) => {
  const { id } = req.params
  const movieIndex = movies.findIndex(movie => movie.id === id)

  if (movieIndex === -1){
    return res.status(404).json({ message: 'Movie not found' })
  }

  const result = validationPartialMovie(req.body)
  
  if(!result.success){
    return res.status(404).json({ error: JSON.parse(result.error.message) })
  }
  

  const updateMovie = {
    ...movies[movieIndex],
    ...result.data
  }

  movies[movieIndex] = updateMovie

  return res.json(updateMovie)
})

/*---------------------------------------------------------------------------------------*/

// PUT // Actualizar totalmente un elemento ya existente o crearlo si no existe

const PORT = process.env.PORT ?? 1234

app.listen(PORT, () => {
  console.log(`server listening on port http://localhost:${PORT}`)
})
