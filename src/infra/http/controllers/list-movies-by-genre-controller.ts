import { Request, Response } from 'express'
import { ListMoviesByGenre } from '../../../core/usecases/list-movies-by-genre'

export class ListMoviesByGenreController {
  async handle(request: Request, reply: Response) {
    const { genre } = request.body

    const listMoviesByGenre = new ListMoviesByGenre()
    const data = await listMoviesByGenre.execute({ genre })

    return reply.json(data)
  }
}
