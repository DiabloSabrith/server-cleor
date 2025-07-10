/*
  Warnings:

  - The primary key for the `Contentlock` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Contentlock` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Contentlock" DROP CONSTRAINT "Contentlock_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Contentlock_pkey" PRIMARY KEY ("id");
