/*
  Warnings:

  - A unique constraint covering the columns `[email,token]` on the table `verification_tokens` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `email` to the `verification_tokens` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "verification_tokens_identifier_token_key";

-- AlterTable
ALTER TABLE "verification_tokens" ADD COLUMN "email" TEXT NOT NULL;
ALTER TABLE "verification_tokens" ADD CONSTRAINT "verification_tokens_pkey" PRIMARY KEY ("identifier");

-- CreateIndex
CREATE UNIQUE INDEX "verification_tokens_email_token_key" ON "verification_tokens"("email", "token");
