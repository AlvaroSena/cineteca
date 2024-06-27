import { prisma } from '../../infra/prisma'

interface ListMoviesByTitleRequest {
  title: string
}

export class ListMoviesByTitle {
  async execute({ title }: ListMoviesByTitleRequest) {
    const movies = await prisma.movie.findMany({
      where: {
        title: {
          contains: title,
          mode: 'insensitive',
        },
      },
    })

    return {
      movies,
    }
  }
}
