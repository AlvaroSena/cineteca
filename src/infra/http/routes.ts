import { Router } from 'express'
import { CreateDirectorController } from './controllers/create-director-controller'
import { GetDirectorController } from './controllers/get-director-controller'
import { UpdateDirectorController } from './controllers/update-director-controller'
import { DeleteDirectorController } from './controllers/delete-director-controller'
import { CreateGenreController } from './controllers/create-genre-controller'
import { UpdateGenreController } from './controllers/update-genre-controller'
import { DeleteGenreController } from './controllers/delete-genre-controller'

export const routes = Router()

const createDirectorController = new CreateDirectorController()
const getDirectorController = new GetDirectorController()
const updateDirectorController = new UpdateDirectorController()
const deleteDirectorController = new DeleteDirectorController()
const createGenreController = new CreateGenreController()
const updateGenreController = new UpdateGenreController()
const deleteGenreController = new DeleteGenreController()

routes.post('/v1/directors', createDirectorController.handle)
routes.get('/v1/directors/:directorId', getDirectorController.handle)
routes.put('/v1/directors/:directorId/update', updateDirectorController.handle)
routes.delete(
  '/v1/directors/:directorId/delete',
  deleteDirectorController.handle,
)
routes.post('/v1/genres', createGenreController.handle)
routes.put('/v1/genres/:genreId/update', updateGenreController.handle)
routes.delete('/v1/genres/:genreId/delete', deleteGenreController.handle)
