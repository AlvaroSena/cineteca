import { Request, Response } from 'express'
import { DeleteDirector } from '../../../core/usecases/delete-director'
import { NotFoundError } from '../../../core/errors/NotFoundError'

export class DeleteDirectorController {
  async handle(request: Request, reply: Response) {
    try {
      const { directorId } = request.params

      const deleteDirector = new DeleteDirector()
      await deleteDirector.execute({ directorId })

      return reply.status(204).send()
    } catch (err) {
      if (err instanceof NotFoundError) {
        return reply.status(404).json(err.message)
      }
    }
  }
}
