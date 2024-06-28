import { Request, Response } from 'express'
import { ListMovies } from '../../../core/usecases/list-movies'

export class ListMoviesController {
  async handle(request: Request, reply: Response) {
    const query = request.query
    const offset = query.q as string

    const listMovies = new ListMovies()

    const data = await listMovies.execute({ offset: parseInt(offset) })
    return reply.json(data)
  }
}
