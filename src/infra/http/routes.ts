import { Router } from 'express'
import { CreateDirectorController } from './controllers/create-director-controller'
import { GetDirectorController } from './controllers/get-director-controller'
import { UpdateDirectorController } from './controllers/update-director-controller'
import { DeleteDirectorController } from './controllers/delete-director-controller'

export const routes = Router()

const createDirectorController = new CreateDirectorController()
const getDirectorController = new GetDirectorController()
const updateDirectorController = new UpdateDirectorController()
const deleteDirectorController = new DeleteDirectorController()

routes.post('/v1/directors', createDirectorController.handle)
routes.get('/v1/directors/:directorId', getDirectorController.handle)
routes.put('/v1/directors/:directorId/update', updateDirectorController.handle)
routes.delete(
  '/v1/directors/:directorId/delete',
  deleteDirectorController.handle,
)
