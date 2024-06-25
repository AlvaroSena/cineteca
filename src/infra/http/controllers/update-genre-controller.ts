import { Request, Response } from 'express'
import { NotFoundError } from '../../../core/errors/NotFoundError'
import { UpdateGenre } from '../../../core/usecases/update-genre'

export class UpdateGenreController {
  async handle(request: Request, reply: Response) {
    try {
      const { genreId } = request.params
      const { name } = request.body

      const updateGenre = new UpdateGenre()
      await updateGenre.execute({ genreId, name })

      return reply.status(201).send()
    } catch (err) {
      if (err instanceof NotFoundError) {
        return reply.status(404).json(err.message)
      }
    }
  }
}
