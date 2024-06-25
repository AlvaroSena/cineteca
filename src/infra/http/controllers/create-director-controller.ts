import { Request, Response } from 'express'
import { CreateDirector } from '../../../core/usecases/create-director'

export class CreateDirectorController {
  async handle(request: Request, reply: Response) {
    const { name } = request.body

    const createDirector = new CreateDirector()
    await createDirector.execute({ name })

    return reply.status(201).send()
  }
}
