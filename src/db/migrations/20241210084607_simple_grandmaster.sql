CREATE TABLE IF NOT EXISTS `genders` (
	`id` bigint AUTO_INCREMENT NOT NULL,
	`gender_name` varchar(20) NOT NULL,
	`created_at` timestamp,
	CONSTRAINT `genders_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS `users` (
	`id` bigint AUTO_INCREMENT NOT NULL,
	`first_name` varchar(200) NOT NULL,
	`last_name` varchar(200) NOT NULL,
	`email` varchar(200) NOT NULL,
	`password` varchar(255) NOT NULL,
	`gender_id` bigint NOT NULL DEFAULT 1,
	CONSTRAINT `users_id` PRIMARY KEY(`id`),
	CONSTRAINT `users_email_unique` UNIQUE(`email`)
);
--> statement-breakpoint
ALTER TABLE `users` ADD CONSTRAINT `users_gender_id_genders_id_fk` FOREIGN KEY (`gender_id`) REFERENCES `genders`(`id`) ON DELETE no action ON UPDATE no action;