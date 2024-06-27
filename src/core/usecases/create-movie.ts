import { prisma } from '../../infra/prisma'
import { Genre } from '@prisma/client'
import { NotFoundError } from '../errors/NotFoundError'
import { generateSlug } from '../lib/generate-slug'

interface CreateMovieRequest {
  title: string
  cover?: string
  dateRelease: string
  directorId: string
  genre: Genre
}

export class CreateMovie {
  async execute({
    title,
    cover,
    dateRelease,
    directorId,
    genre,
  }: CreateMovieRequest) {
    const director = await prisma.director.findUnique({
      where: {
        id: directorId,
      },
    })

    if (!director) {
      throw new NotFoundError('Director not found')
    }

    await prisma.movie.create({
      data: {
        title,
        cover,
        slug: generateSlug(title),
        dateRelease,
        directorId,
        genre,
      },
    })
  }
}
