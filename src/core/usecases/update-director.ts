import { prisma } from '../../infra/prisma'
import { NotFoundError } from '../errors/NotFoundError'

interface UpdateDirectorRequest {
  directorId: string
  name: string
}

export class UpdateDirector {
  async execute({ directorId, name }: UpdateDirectorRequest) {
    const director = await prisma.director.findUnique({
      where: {
        id: directorId,
      },
    })

    if (!director) {
      throw new NotFoundError('Director not found')
    }

    await prisma.director.update({
      where: {
        id: director.id,
      },
      data: {
        name,
      },
    })
  }
}
