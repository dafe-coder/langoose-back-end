-- CreateTable
CREATE TABLE "navigation_block" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "navigation_block_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "navigation_block_item" (
    "id" UUID NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "icon" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "navigation_block_id" TEXT,

    CONSTRAINT "navigation_block_item_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "navigation_block_item" ADD CONSTRAINT "navigation_block_item_navigation_block_id_fkey" FOREIGN KEY ("navigation_block_id") REFERENCES "navigation_block"("id") ON DELETE SET NULL ON UPDATE CASCADE;
