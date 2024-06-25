import { prisma } from '../../infra/prisma'
import { NotFoundError } from '../errors/NotFoundError'

interface DeleteDirectorRequest {
  directorId: string
}

export class DeleteDirector {
  async execute({ directorId }: DeleteDirectorRequest) {
    const director = await prisma.director.findUnique({
      where: {
        id: directorId,
      },
    })

    if (!director) {
      throw new NotFoundError('Director not found')
    }

    await prisma.director.delete({
      where: {
        id: director.id,
      },
    })
  }
}
