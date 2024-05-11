/*
  Warnings:

  - Made the column `navigation_block_id` on table `navigation_block_item` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "navigation_block_item" DROP CONSTRAINT "navigation_block_item_navigation_block_id_fkey";

-- AlterTable
ALTER TABLE "navigation_block_item" ALTER COLUMN "navigation_block_id" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "navigation_block_item" ADD CONSTRAINT "navigation_block_item_navigation_block_id_fkey" FOREIGN KEY ("navigation_block_id") REFERENCES "navigation_block"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
