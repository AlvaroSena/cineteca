/*
  Warnings:

  - You are about to drop the column `director_id` on the `movies` table. All the data in the column will be lost.
  - You are about to drop the `directors` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `director` to the `movies` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "movies" DROP CONSTRAINT "movies_director_id_fkey";

-- AlterTable
ALTER TABLE "movies" DROP COLUMN "director_id",
ADD COLUMN     "director" TEXT NOT NULL;

-- DropTable
DROP TABLE "directors";
