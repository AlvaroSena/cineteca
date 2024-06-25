import { Request, Response } from 'express'
import { CreateGenre } from '../../../core/usecases/create-genre'

export class CreateGenreController {
  async handle(request: Request, reply: Response) {
    const { name } = request.body

    const createGenre = new CreateGenre()
    await createGenre.execute({ name })

    return reply.status(201).send()
  }
}
