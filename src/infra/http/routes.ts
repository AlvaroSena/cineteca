import { Router } from 'express'
import { CreateMovieController } from './controllers/create-movie-controller'
import { UpdateMovieController } from './controllers/update-movie-controller'
import { ListMoviesController } from './controllers/list-movies-controller'
import { ListMoviesByGenreController } from './controllers/list-movies-by-genre-controller'
import { CreatePlayerController } from './controllers/create-player-controller'
import { GetMovieController } from './controllers/get-movie-controller'
import { DeleteMovieController } from './controllers/delete-movie-controller'
import { GetMovieBySlugController } from './controllers/get-movie-by-slug-controller'
import { ListMoviesByTitleController } from './controllers/list-movies-by-title-controller'

export const routes = Router()

const createMovieController = new CreateMovieController()
const updateMovieController = new UpdateMovieController()
const listMoviesController = new ListMoviesController()
const listMoviesByGenreController = new ListMoviesByGenreController()
const getMovieController = new GetMovieController()
const deleteMovieController = new DeleteMovieController()
const getMovieBySlugController = new GetMovieBySlugController()
const listMoviesByTitleController = new ListMoviesByTitleController()
const createPlayerController = new CreatePlayerController()

routes.post('/v1/movies', createMovieController.handle)
routes.patch('/v1/movies/:movieId/update', updateMovieController.handle)
routes.get('/v1/movies', listMoviesController.handle)
routes.get('/v1/movies/genre', listMoviesByGenreController.handle)
routes.get('/v1/movies/:movieId', getMovieController.handle)
routes.delete('/v1/movies/:movieId/delete', deleteMovieController.handle)
routes.get('/v1/movies/title/:slug', getMovieBySlugController.handle)
routes.get('/v1/movies/query/title', listMoviesByTitleController.handle)
routes.post('/v1/players/:movieId', createPlayerController.handle)
