/*
  Warnings:

  - You are about to drop the column `topicId` on the `answers` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `answers` DROP FOREIGN KEY `answers_topicId_fkey`;

-- AlterTable
ALTER TABLE `answers` DROP COLUMN `topicId`;
