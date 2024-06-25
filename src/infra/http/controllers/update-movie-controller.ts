import { Request, Response } from 'express'
import { UpdateMovie } from '../../../core/usecases/update-movie'

export class UpdateMovieController {
  async handle(request: Request, reply: Response) {
    const { movieId } = request.params
    const { title, cover, dateRelease, directorId, genre } = request.body

    const updateMovie = new UpdateMovie()
    await updateMovie.execute({
      movieId,
      title,
      cover,
      dateRelease,
      directorId,
      genre,
    })

    return reply.status(201).send()
  }
}
