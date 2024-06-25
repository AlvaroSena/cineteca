import { prisma } from '../../infra/prisma'

interface CreateGenreRequest {
  name: string
}

export class CreateGenre {
  async execute({ name }: CreateGenreRequest) {
    await prisma.genre.create({
      data: {
        name,
      },
    })
  }
}
