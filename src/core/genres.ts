import z from 'zod'

export const GenresEnum = z.enum([
  'THRILLER',
  'ACTION',
  'DRAMA',
  'COMEDY',
  'ROMANCE',
  'HORROR',
  'FICTION',
  'CRIME',
  'HISTORY',
  'ADVENTURE',
  'MUSICAL',
  'ROMANTIC_COMEDY',
  'WAR',
])
