CREATE TABLE `main_topics`
(
 `id`    int NOT NULL AUTO_INCREMENT ,
 `label` varchar(255) NOT NULL ,

PRIMARY KEY (`id`)
);

CREATE TABLE `users`
(
 `id`           int NOT NULL AUTO_INCREMENT ,
 `is_faculty`   tinyint NOT NULL DEFAULT 0 ,
 `name`         varchar(255) NOT NULL ,
 `email`        varchar(255) NOT NULL ,
 `phone`        varchar(15) NULL ,
 `image`        text NULL ,
 `conentration` text NULL ,
 `degree`       text NULL ,

PRIMARY KEY (`id`)
) AUTO_INCREMENT=1000000;

CREATE TABLE `sub_topics`
(
 `id`        int NOT NULL AUTO_INCREMENT ,
 `parent_id` int NOT NULL ,
 `label`     varchar(255) NOT NULL ,

PRIMARY KEY (`id`),
KEY `fkIdx_16` (`parent_id`),
CONSTRAINT `FK_14` FOREIGN KEY `fkIdx_16` (`parent_id`) REFERENCES `main_topics` (`id`)
);

CREATE TABLE `faculty_interests`
(
 `id`  int NOT NULL ,
 `user`  int NOT NULL ,
 `topic` int NOT NULL ,

PRIMARY KEY (`id`),
KEY `fkIdx_52` (`user`),
CONSTRAINT `FK_50` FOREIGN KEY `fkIdx_52` (`user`) REFERENCES `users` (`id`),
KEY `fkIdx_58` (`topic`),
CONSTRAINT `FK_56` FOREIGN KEY `fkIdx_58` (`topic`) REFERENCES `sub_topics` (`id`)
);

CREATE TABLE `articles`
(
 `id`     int NOT NULL AUTO_INCREMENT ,
 `topic`  int NOT NULL ,
 `source` text NOT NULL ,

PRIMARY KEY (`id`),
KEY `fkIdx_27` (`topic`),
CONSTRAINT `FK_25` FOREIGN KEY `fkIdx_27` (`topic`) REFERENCES `sub_topics` (`id`)
);