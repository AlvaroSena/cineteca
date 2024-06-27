import { Router } from 'express'
import { CreateDirectorController } from './controllers/create-director-controller'
import { GetDirectorController } from './controllers/get-director-controller'
import { UpdateDirectorController } from './controllers/update-director-controller'
import { DeleteDirectorController } from './controllers/delete-director-controller'
import { CreateMovieController } from './controllers/create-movie-controller'
import { UpdateMovieController } from './controllers/update-movie-controller'
import { ListMoviesController } from './controllers/list-movies-controller'
import { ListMoviesByGenreController } from './controllers/list-movies-by-genre-controller'
import { CreatePlayerController } from './controllers/create-player-controller'
import { GetMovieController } from './controllers/get-movie-controller'
import { DeleteMovieController } from './controllers/delete-movie-controller'

export const routes = Router()

const createDirectorController = new CreateDirectorController()
const getDirectorController = new GetDirectorController()
const updateDirectorController = new UpdateDirectorController()
const deleteDirectorController = new DeleteDirectorController()
const createMovieController = new CreateMovieController()
const updateMovieController = new UpdateMovieController()
const listMoviesController = new ListMoviesController()
const listMoviesByGenreController = new ListMoviesByGenreController()
const getMovieController = new GetMovieController()
const deleteMovieController = new DeleteMovieController()
const createPlayerController = new CreatePlayerController()

routes.post('/v1/directors', createDirectorController.handle)
routes.get('/v1/directors/:directorId', getDirectorController.handle)
routes.put('/v1/directors/:directorId/update', updateDirectorController.handle)
routes.delete(
  '/v1/directors/:directorId/delete',
  deleteDirectorController.handle,
)
routes.post('/v1/movies', createMovieController.handle)
routes.patch('/v1/movies/:movieId/update', updateMovieController.handle)
routes.get('/v1/movies', listMoviesController.handle)
routes.get('/v1/movies/genre', listMoviesByGenreController.handle)
routes.get('/v1/movies/:movieId', getMovieController.handle)
routes.delete('/v1/movies/:movieId/delete', deleteMovieController.handle)
routes.post('/v1/players/:movieId', createPlayerController.handle)
