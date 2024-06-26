import { prisma } from '../../infra/prisma'
import { NotFoundError } from '../errors/NotFoundError'

interface DeleteMovieRequest {
  movieId: string
}

export class DeleteMovie {
  async execute({ movieId }: DeleteMovieRequest) {
    const movie = await prisma.movie.findUnique({
      where: {
        id: movieId,
      },
    })

    if (!movie) {
      throw new NotFoundError('Movie not found')
    }

    await prisma.movie.delete({
      where: {
        id: movie.id,
      },
    })
  }
}
