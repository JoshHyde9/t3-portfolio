-- CreateTable
CREATE TABLE "GuestBook" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "comment" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "GuestBook_pkey" PRIMARY KEY ("id")
);