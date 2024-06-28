import { prisma } from '../../infra/prisma'

interface ListMoviesRequest {
  offset: number
}

export class ListMovies {
  async execute({ offset }: ListMoviesRequest) {
    const movies = await prisma.movie.findMany({
      orderBy: {
        title: 'asc',
      },
      skip: offset,
      take: 15,
    })

    return {
      movies,
    }
  }
}
