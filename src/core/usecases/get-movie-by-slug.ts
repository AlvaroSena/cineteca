import { prisma } from '../../infra/prisma'
import { NotFoundError } from '../errors/NotFoundError'

interface GetMovieBySlugRequest {
  slug: string
}

export class GetMovieBySlug {
  async execute({ slug }: GetMovieBySlugRequest) {
    const movie = await prisma.movie.findUnique({
      where: {
        slug,
      },
      include: {
        players: true,
        Director: true,
      },
    })

    if (!movie) {
      throw new NotFoundError('Movie not found')
    }

    return movie
  }
}
