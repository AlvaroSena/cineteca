import { prisma } from '../../infra/prisma'
import { NotFoundError } from '../errors/NotFoundError'

interface DeleteGenreRequest {
  genreId: string
}

export class DeleteGenre {
  async execute({ genreId }: DeleteGenreRequest) {
    const genre = await prisma.director.findUnique({
      where: {
        id: genreId,
      },
    })

    if (!genre) {
      throw new NotFoundError('Genre not found')
    }

    await prisma.director.delete({
      where: {
        id: genre.id,
      },
    })
  }
}
