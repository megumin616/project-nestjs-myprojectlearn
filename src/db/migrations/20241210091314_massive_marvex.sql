CREATE TABLE IF NOT EXISTS `companies` (
	`id` bigint AUTO_INCREMENT NOT NULL,
	`name` varchar(255) NOT NULL,
	`description` text,
	`registration_number` varchar(100) NOT NULL,
	`address` text NOT NULL,
	`phone` varchar(15) NOT NULL,
	`email` varchar(200) NOT NULL,
	`website` varchar(255),
	`created_at` timestamp NOT NULL DEFAULT (now()),
	`updated_at` timestamp DEFAULT (now()),
	CONSTRAINT `companies_id` PRIMARY KEY(`id`),
	CONSTRAINT `companies_registration_number_unique` UNIQUE(`registration_number`),
	CONSTRAINT `companies_email_unique` UNIQUE(`email`)
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS `finance` (
	`id` bigint AUTO_INCREMENT NOT NULL,
	`company_id` bigint NOT NULL,
	`fiscal_year` varchar(10) NOT NULL,
	`total_revenue` decimal(20,2) NOT NULL,
	`total_expenses` decimal(20,2) NOT NULL,
	`net_profit` decimal(20,2) NOT NULL,
	`assets` decimal(20,2) NOT NULL,
	`liabilities` decimal(20,2) NOT NULL,
	`equity` decimal(20,2) NOT NULL,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	`updated_at` timestamp DEFAULT (now()),
	CONSTRAINT `finance_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
ALTER TABLE `finance` ADD CONSTRAINT `finance_company_id_companies_id_fk` FOREIGN KEY (`company_id`) REFERENCES `companies`(`id`) ON DELETE no action ON UPDATE no action;