import { prisma } from '../../infra/prisma'
import { NotFoundError } from '../errors/NotFoundError'

interface GetMovieRequest {
  movieId: string
}

export class GetMovie {
  async execute({ movieId }: GetMovieRequest) {
    const movie = await prisma.movie.findUnique({
      where: {
        id: movieId,
      },
      include: {
        players: true,
      },
    })

    if (!movie) {
      throw new NotFoundError('Movie not found')
    }

    return {
      movie,
    }
  }
}
