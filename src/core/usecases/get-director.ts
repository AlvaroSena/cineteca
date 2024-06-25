import { prisma } from '../../infra/prisma'
import { NotFoundError } from '../errors/NotFoundError'

interface GetDirectorRequest {
  directorId: string
}

export class GetDirector {
  async execute({ directorId }: GetDirectorRequest) {
    const director = await prisma.director.findUnique({
      where: {
        id: directorId,
      },
    })

    if (!director) {
      throw new NotFoundError('Director not found')
    }

    return {
      director,
    }
  }
}
