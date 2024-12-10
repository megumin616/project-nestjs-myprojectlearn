import { TypeOrmModule, TypeOrmModuleOptions } from "@nestjs/typeorm";
import { ConfigService } from "@nestjs/config";

import { config as dotenvConfig } from "dotenv";

dotenvConfig({
  path: ".env",
});

const typeOrmConnection = TypeOrmModule.forRootAsync({
  inject: [ConfigService],
  /**
   * @param {ConfigService} configService - The configuration service.
   * @returns {Promise<TypeOrmModuleOptions>} The module options.
   */
  useFactory: async (
    configService: ConfigService,
  ): Promise<TypeOrmModuleOptions> => ({
    type: "mysql",
    host: "localhost",
    port:  3306,
    username: configService.get<string>("DB_USERNAME"),
    password: configService.get<string>("DB_PASSWORD"),
    database: configService.get<string>("DB_NAME"),
    synchronize: false,
    entities: ["./dist/src/entities/*.entity{.ts,.js}"],
  }),
});

export { typeOrmConnection };