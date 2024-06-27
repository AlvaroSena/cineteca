import { Request, Response } from 'express'
import { NotFoundError } from '../../../core/errors/NotFoundError'
import { GetMovie } from '../../../core/usecases/get-movie'

export class GetMovieController {
  async handle(request: Request, reply: Response) {
    try {
      const { movieId } = request.params

      const getMovie = new GetMovie()

      const data = await getMovie.execute({ movieId })

      return reply.json(data)
    } catch (err) {
      if (err instanceof NotFoundError) {
        return reply.status(404).json(err.message)
      }
    }
  }
}
