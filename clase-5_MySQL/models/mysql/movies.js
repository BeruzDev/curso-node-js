import mysql from 'mysql2/promise'

const config = {
  host: 'localhost',
  user: 'root',
  port: 3306,
  password: '',
  database: 'moviesdb',
}

const connection = await mysql.createConnection(config)

export class MovieModel {
  static async getAll({ genre }) {
    let query =
      'SELECT movie.title, movie.year, movie.director, movie.duration, movie.poster, movie.rate, BIN_TO_UUID(movie.id) id'
    let params = []

    if (genre) {
      const lowerCaseGenre = genre.toLowerCase()
      query +=
        ', genre.name as genre FROM movie INNER JOIN movie_genres ON movie.id = movie_genres.movie_id INNER JOIN genre ON movie_genres.genre_id = genre.id WHERE LOWER(genre.name) = ?'
      params.push(lowerCaseGenre)
    } else {
      query += ' FROM movie'
    }

    const [movies, tableInfo] = await connection.query(query, params)

    return movies
  }

  static async getById({ id }) {
    const [movies] = await connection.query(
      `SELECT movie.title, movie.year, movie.director, movie.duration, movie.poster, movie.rate, 		BIN_TO_UUID(movie.id) id 
			FROM movie WHERE movie.id = UUID_TO_BIN(?)`,
      [id]
    )

    if (movies.length === 0) return null
    return movies[0]
  }

  static async create({ input }) {
    const [uuidResult] = await connection.query('SELECT UUID() as uuid')
    const [{ uuid }] = uuidResult

    await connection.query(
      `INSERT INTO movie (id, title, year, director, duration, poster, rate) VALUES (UUID_TO_BIN("${uuid}"),?,?,?,?,?,?)`,
      [
        input.title,
        input.year,
        input.director,
        input.duration,
        input.poster,
        input.rate,
      ]
    )

    const [movies] = await connection.query(
      'SELECT movie.title, movie.year, movie.director, movie.duration, movie.poster, movie.rate, BIN_TO_UUID(movie.id) id FROM movie WHERE movie.id = UUID_TO_BIN(?)',
      [uuid]
    )

		return movies[0]
  }

  static async delete({ id }) {
    const [movies] = await connection.query(
      'DELETE FROM movie WHERE id = UUID_TO_BIN(?)',
      [id]
    )
  }

  static async update({ id, input }) {
			let query = 'UPDATE movie SET '
			const params = []
			if(input.title){
				query += 'title = ?, '
				params.push(input.title)
			}
			if(input.year){
				query += 'year = ?, '
				params.push(input.year)
			}
			if(input.director){
				query += 'director = ?, '
				params.push(input.director)
			}
			if(input.duration){
				query += 'duration = ?, '
				params.push(input.duration)
			}
			if(input.poster){
				query += 'poster = ?, '
				params.push(input.poster)
			}
			if(input.rate){
				query += 'rate = ?, '
				params.push(input.rate)
			}
			query = query.slice(0, -2)
			query += ' WHERE id = UUID_TO_BIN(?)'
			params.push(id)
		
		await connection.query(query, params)
		
		const [movies] = await connection.query(
      'SELECT movie.title, movie.year, movie.director, movie.duration, movie.poster, movie.rate, BIN_TO_UUID(movie.id) id FROM movie WHERE movie.id = UUID_TO_BIN(?)',
      [id]
    )

		return movies[0]
	}
}
