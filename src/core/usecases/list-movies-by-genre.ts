import { Genre } from '@prisma/client'
import { prisma } from '../../infra/prisma'
import { NotFoundError } from '../errors/NotFoundError'

interface ListMoviesByGenreRequest {
  genre: Genre
}

export class ListMoviesByGenre {
  async execute({ genre }: ListMoviesByGenreRequest) {
    if (!genre) {
      throw new NotFoundError('Genre not found')
    }

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
