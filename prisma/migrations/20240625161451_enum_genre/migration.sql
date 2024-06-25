/*
  Warnings:

  - You are about to drop the column `genre_id` on the `movies` table. All the data in the column will be lost.
  - You are about to drop the `genres` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `genre` to the `movies` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Genre" AS ENUM ('THRILLER', 'ACTION', 'DRAMA', 'COMEDY', 'ROMANCE', 'HORROR', 'FICTION', 'CRIME', 'HISTORY', 'ADVENTURE', 'MUSICAL', 'ROMANTIC_COMEDY', 'WAR');

-- DropForeignKey
ALTER TABLE "movies" DROP CONSTRAINT "movies_genre_id_fkey";

-- AlterTable
ALTER TABLE "movies" DROP COLUMN "genre_id",
ADD COLUMN     "genre" "Genre" NOT NULL;

-- DropTable
DROP TABLE "genres";
