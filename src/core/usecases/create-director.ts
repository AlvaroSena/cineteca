import { prisma } from '../../infra/prisma'

interface CreateDirectorRequest {
  name: string
}

export class CreateDirector {
  async execute({ name }: CreateDirectorRequest) {
    await prisma.director.create({
      data: {
        name,
      },
    })
  }
}
