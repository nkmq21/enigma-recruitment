/*
  Warnings:

  - Added the required column `created_date` to the `jobs` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "jobs" ADD COLUMN     "created_date" DATE NOT NULL;
