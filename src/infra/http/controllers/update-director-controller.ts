import { Request, Response } from 'express'
import { UpdateDirector } from '../../../core/usecases/update-director'
import { NotFoundError } from '../../../core/errors/NotFoundError'

export class UpdateDirectorController {
  async handle(request: Request, reply: Response) {
    try {
      const { directorId } = request.params
      const { name } = request.body

      const updateDirector = new UpdateDirector()
      await updateDirector.execute({ directorId, name })

      return reply.status(201).send()
    } catch (err) {
      if (err instanceof NotFoundError) {
        return reply.status(404).json(err.message)
      }
    }
  }
}
