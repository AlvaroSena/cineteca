import { prisma } from '../../infra/prisma'

export class ListMovies {
  async execute() {
    const movies = await prisma.movie.findMany()

    return {
      movies,
    }
  }
}
