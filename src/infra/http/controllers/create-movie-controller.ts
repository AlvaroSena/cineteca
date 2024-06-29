import z from 'zod'
import { Request, Response } from 'express'
import { CreateMovie } from '../../../core/usecases/create-movie'
import { NotFoundError } from '../../../core/errors/NotFoundError'
import { GenresEnum } from '../../../core/genres'
import { playerSchema } from '../../../core/player'

export class CreateMovieController {
  async handle(request: Request, reply: Response) {
    const createMovieRequestBody = z.object({
      title: z.string(),
      cover: z.string().url().optional(),
      dateRelease: z.string(),
      director: z.string(),
      players: z.array(playerSchema),
      genre: GenresEnum,
    })

    try {
      const { title, cover, dateRelease, director, genre, players } =
        createMovieRequestBody.parse(request.body)

      const createMovie = new CreateMovie()
      await createMovie.execute({
        title,
        cover,
        dateRelease,
        director,
        genre,
        players,
      })

      return reply.status(201).send()
    } catch (err) {
      if (err instanceof z.ZodError) {
        return reply.status(400).json({ message: 'Validation error' })
      }

      if (err instanceof NotFoundError) {
        return reply.status(404).json(err.message)
      }
    }
  }
}
