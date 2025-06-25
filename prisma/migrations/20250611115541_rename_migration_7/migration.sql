-- CreateTable
CREATE TABLE "reset_password_tokens" (
    "identifier" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "reset_password_tokens_pkey" PRIMARY KEY ("identifier")
);

-- CreateIndex
CREATE UNIQUE INDEX "reset_password_tokens_token_key" ON "reset_password_tokens"("token");

-- CreateIndex
CREATE UNIQUE INDEX "reset_password_tokens_email_token_key" ON "reset_password_tokens"("email", "token");
