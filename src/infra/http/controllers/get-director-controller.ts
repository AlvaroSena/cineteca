import { Request, Response } from 'express'
import { GetDirector } from '../../../core/usecases/get-director'
import { NotFoundError } from '../../../core/errors/NotFoundError'

export class GetDirectorController {
  async handle(request: Request, reply: Response) {
    try {
      const { directorId } = request.params

      const createDirector = new GetDirector()
      const data = await createDirector.execute({ directorId })

      return reply.json(data)
    } catch (err) {
      if (err instanceof NotFoundError) {
        return reply.status(404).json(err.message)
      }
    }
  }
}
