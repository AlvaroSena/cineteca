import { Request, Response } from 'express'
import { ListMoviesByTitle } from '../../../core/usecases/list-movies-by-title'

export class ListMoviesByTitleController {
  async handle(request: Request, reply: Response) {
    const query = request.query
    const title = query.q as string

    const listMoviesByTitle = new ListMoviesByTitle()
    const data = await listMoviesByTitle.execute({ title })

    return reply.json(data)
  }
}
