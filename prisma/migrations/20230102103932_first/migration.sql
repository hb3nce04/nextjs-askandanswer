/*
  Warnings:

  - You are about to drop the column `QuestionId` on the `answers` table. All the data in the column will be lost.
  - You are about to drop the column `UserId` on the `answers` table. All the data in the column will be lost.
  - You are about to drop the column `TopicId` on the `questions` table. All the data in the column will be lost.
  - You are about to drop the column `UserId` on the `questions` table. All the data in the column will be lost.
  - You are about to drop the column `CategoryId` on the `topics` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `answers` DROP FOREIGN KEY `answers_ibfk_1`;

-- DropForeignKey
ALTER TABLE `answers` DROP FOREIGN KEY `answers_ibfk_2`;

-- DropForeignKey
ALTER TABLE `questions` DROP FOREIGN KEY `questions_ibfk_1`;

-- DropForeignKey
ALTER TABLE `questions` DROP FOREIGN KEY `questions_ibfk_2`;

-- DropForeignKey
ALTER TABLE `topics` DROP FOREIGN KEY `topics_ibfk_1`;

-- AlterTable
ALTER TABLE `answers` DROP COLUMN `QuestionId`,
    DROP COLUMN `UserId`;

-- AlterTable
ALTER TABLE `questions` DROP COLUMN `TopicId`,
    DROP COLUMN `UserId`;

-- AlterTable
ALTER TABLE `topics` DROP COLUMN `CategoryId`;
