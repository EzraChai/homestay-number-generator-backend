-- CreateTable
CREATE TABLE `RandomNumber` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `number_generated` VARCHAR(191) NOT NULL,
    `date_created` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
