import { prisma } from '../../infra/prisma'
import { Genre } from '@prisma/client'
import { generateSlug } from '../lib/generate-slug'

interface Player {
  videoURL: string
}

interface CreateMovieRequest {
  title: string
  cover?: string
  dateRelease: string
  director: string
  genre: Genre
  players: Player[]
}

export class CreateMovie {
  async execute({
    title,
    cover,
    dateRelease,
    director,
    genre,
    players,
  }: CreateMovieRequest) {
    await prisma.movie.create({
      data: {
        title,
        cover,
        slug: generateSlug(title),
        dateRelease,
        director,
        genre,
        players: {
          createMany: {
            data: players.map((player) => {
              return { videoURL: player.videoURL }
            }),
          },
        },
      },
    })
  }
}
