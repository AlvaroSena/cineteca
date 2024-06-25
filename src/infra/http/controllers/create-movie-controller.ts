import { Request, Response } from 'express'
import { CreateMovie } from '../../../core/usecases/create-movie'

export class CreateMovieController {
  async handle(request: Request, reply: Response) {
    const { title, cover, dateRelease, directorId, genre } = request.body

    const createMovie = new CreateMovie()
    await createMovie.execute({ title, cover, dateRelease, directorId, genre })

    return reply.status(201).send()
  }
}
