-- AlterTable
ALTER TABLE `topic` ADD COLUMN `categoryId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Topic` ADD CONSTRAINT `Topic_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `Category`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
