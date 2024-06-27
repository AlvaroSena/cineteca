-- DropForeignKey
ALTER TABLE "players" DROP CONSTRAINT "players_movie_id_fkey";

-- AddForeignKey
ALTER TABLE "players" ADD CONSTRAINT "players_movie_id_fkey" FOREIGN KEY ("movie_id") REFERENCES "movies"("id") ON DELETE CASCADE ON UPDATE CASCADE;
