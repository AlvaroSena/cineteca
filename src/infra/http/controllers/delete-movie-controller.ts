import { Request, Response } from 'express'
import { NotFoundError } from '../../../core/errors/NotFoundError'
import { DeleteMovie } from '../../../core/usecases/delete-movie'

export class DeleteMovieController {
  async handle(request: Request, reply: Response) {
    try {
      const { movieId } = request.params

      const deleteMovie = new DeleteMovie()
      await deleteMovie.execute({ movieId })

      return reply.status(204).send()
    } catch (err) {
      if (err instanceof NotFoundError) {
        return reply.status(404).json(err.message)
      }
    }
  }
}
