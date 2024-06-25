import { Request, Response } from 'express'
import { ListMovies } from '../../../core/usecases/list-movies'

export class ListMoviesController {
  async handle(request: Request, reply: Response) {
    const listMovies = new ListMovies()

    const data = await listMovies.execute()
    return reply.json(data)
  }
}
