-- CreateTable
CREATE TABLE "Contentlock" (
    "id" TEXT NOT NULL,
    "title" TEXT,
    "text" TEXT,
    "imageUrl" TEXT,
    "updateUp" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Contentlock_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

