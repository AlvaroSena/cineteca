import { Request, Response } from 'express'
import { NotFoundError } from '../../../core/errors/NotFoundError'
import { CreatePlayer } from '../../../core/usecases/create-player'

export class CreatePlayerController {
  async handle(request: Request, reply: Response) {
    try {
      const { movieId } = request.params
      const { videoURL } = request.body

      const createPlayer = new CreatePlayer()
      const data = await createPlayer.execute({ movieId, videoURL })

      return reply.json(data)
    } catch (err) {
      if (err instanceof NotFoundError) {
        return reply.status(404).json(err.message)
      }
    }
  }
}
