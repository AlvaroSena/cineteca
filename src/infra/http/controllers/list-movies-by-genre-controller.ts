import { Request, Response } from 'express'
import { ListMoviesByGenre } from '../../../core/usecases/list-movies-by-genre'
import { Genre } from '@prisma/client'
import { NotFoundError } from '../../../core/errors/NotFoundError'

export class ListMoviesByGenreController {
  async handle(request: Request, reply: Response) {
    try {
      const query = request.query
      let genre = query.q as string
      genre = genre.toUpperCase()

      const listMoviesByGenre = new ListMoviesByGenre()
      const data = await listMoviesByGenre.execute({ genre: genre as Genre })

      return reply.json(data)
    } catch (err) {
      if (err instanceof NotFoundError) {
        return reply.status(404).json(err.message)
      }
    }
  }
}
