import { Request, Response } from 'express'
import { CreateMovie } from '../../../core/usecases/create-movie'
import { NotFoundError } from '../../../core/errors/NotFoundError'

export class CreateMovieController {
  async handle(request: Request, reply: Response) {
    try {
      const { title, cover, dateRelease, directorId, genre } = request.body

      const createMovie = new CreateMovie()
      await createMovie.execute({
        title,
        cover,
        dateRelease,
        directorId,
        genre,
      })

      return reply.status(201).send()
    } catch (err) {
      if (err instanceof NotFoundError) {
        return reply.status(404).json(err.message)
      }
    }
  }
}
