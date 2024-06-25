import { prisma } from '../../infra/prisma'
import { NotFoundError } from '../errors/NotFoundError'

interface UpdateGenreRequest {
  genreId: string
  name: string
}

export class UpdateGenre {
  async execute({ genreId, name }: UpdateGenreRequest) {
    const genre = await prisma.genre.findUnique({
      where: {
        id: genreId,
      },
    })

    if (!genre) {
      throw new NotFoundError('Genre not found')
    }

    await prisma.director.update({
      where: {
        id: genre.id,
      },
      data: {
        name,
      },
    })
  }
}
