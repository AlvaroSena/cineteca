import { prisma } from '../../infra/prisma'
import { Genre } from '@prisma/client'

interface CreateMovieRequest {
  title: string
  cover?: string
  dateRelease: string
  directorId: string
  genre: Genre
}

export class CreateMovie {
  async execute({
    title,
    cover,
    dateRelease,
    directorId,
    genre,
  }: CreateMovieRequest) {
    await prisma.movie.create({
      data: {
        title,
        cover,
        dateRelease,
        directorId,
        genre,
      },
    })
  }
}
