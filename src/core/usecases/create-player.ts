import { prisma } from '../../infra/prisma'
import { NotFoundError } from '../errors/NotFoundError'

interface CreatePlayerRequest {
  movieId: string
  videoURL: string
}

export class CreatePlayer {
  async execute({ movieId, videoURL }: CreatePlayerRequest) {
    const movie = await prisma.movie.findUnique({
      where: {
        id: movieId,
      },
    })

    if (!movie) {
      throw new NotFoundError('Movie not found')
    }

    const player = await prisma.player.create({
      data: {
        movieId,
        videoURL,
      },
    })

    return {
      player,
    }
  }
}
