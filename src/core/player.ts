import z from 'zod'

export const playerSchema = z.object({
  videoURL: z.string().url(),
})
