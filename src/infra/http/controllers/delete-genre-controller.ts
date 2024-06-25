import { Request, Response } from 'express'
import { NotFoundError } from '../../../core/errors/NotFoundError'
import { DeleteGenre } from '../../../core/usecases/delete-genre'

export class DeleteGenreController {
  async handle(request: Request, reply: Response) {
    try {
      const { genreId } = request.params

      const deleteGenre = new DeleteGenre()
      await deleteGenre.execute({ genreId })

      return reply.status(204).send()
    } catch (err) {
      if (err instanceof NotFoundError) {
        return reply.status(404).json(err.message)
      }
    }
  }
}
