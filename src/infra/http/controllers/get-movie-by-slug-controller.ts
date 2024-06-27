import { Request, Response } from 'express'
import { NotFoundError } from '../../../core/errors/NotFoundError'
import { GetMovieBySlug } from '../../../core/usecases/get-movie-by-slug'

export class GetMovieBySlugController {
  async handle(request: Request, reply: Response) {
    try {
      const { slug } = request.params

      const getMovieBySlug = new GetMovieBySlug()
      const data = await getMovieBySlug.execute({ slug })

      return reply.json(data)
    } catch (err) {
      if (err instanceof NotFoundError) {
        return reply.status(404).json(err.message)
      }
    }
  }
}
