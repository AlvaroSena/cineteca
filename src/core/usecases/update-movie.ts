import { prisma } from '../../infra/prisma'
import { Genre } from '@prisma/client'

interface UpdateMovieRequest {
  movieId: string
  title?: string
  cover?: string
  dateRelease?: string
  directorId?: string
  genre?: Genre
}

export class UpdateMovie {
  async execute(data: UpdateMovieRequest) {
    await prisma.movie.update({
      where: {
        id: data.movieId,
      },
      data,
    })
  }
}
