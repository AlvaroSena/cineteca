import { Genre } from '@prisma/client'
import { prisma } from '../../infra/prisma'

interface ListMoviesByGenreRequest {
  genre: Genre
}

export class ListMoviesByGenre {
  async execute({ genre }: ListMoviesByGenreRequest) {
    const movies = await prisma.movie.findMany({
      where: {
        genre,
      },
    })

    return {
      movies,
    }
  }
}
