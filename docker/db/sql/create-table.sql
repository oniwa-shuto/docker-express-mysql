DROP TABLE IF EXISTS `users`;

CREATE TABLE IF NOT EXISTS `users` (
    `id` INT(20) AUTO_INCREMENT,
    `name` VARCHAR(40) NOT NULL,
    `email` VARCHAR(40) NOT NULL,
    `password` VARCHAR(20) NOT NULL,
    PRIMARY KEY (`id`)
)DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

DROP TABLE IF EXISTS `posts`;

CREATE TABLE IF NOT EXISTS `posts` (
    `id` INT(20) AUTO_INCREMENT,
    `title` VARCHAR(20) NOT NULL,
    `contents` VARCHAR(140) NOT NULL,
    `user_id` INT(20) NOT NULL,
    PRIMARY KEY (`id`)
)DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

DROP TABLE IF EXISTS `likes`;

CREATE TABLE IF NOT EXISTS `likes` (
    `id` INT(20) AUTO_INCREMENT,
    `user_id` INT(20) NOT NULL,
    `post_id` INT(20) NOT NULL,
    PRIMARY KEY (`id`)
)DEFAULT CHARSET=utf8 COLLATE=utf8_bin;