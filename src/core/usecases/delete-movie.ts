interface DeleteMovieRequest {
  movieId: string
}

export class DeleteMovie {
  async execute({ movieId }: DeleteMovieRequest) {}
}
