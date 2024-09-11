import { Module } from "@nestjs/common";
import { UsersController } from "./users.controller";
import { UsersService } from "./users.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "./entities/user.entity";
import { ConfigModule, ConfigService } from "@nestjs/config";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Hacer que las variables de entorno estén disponibles globalmente
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: "postgres",
        host: configService.get<string>("DB_HOST"),
        port: configService.get<number>("DB_PORT") || 5432,
        username: configService.get<string>("DB_USERNAME") || "postgres",
        password: configService.get<string>("DB_PASSWORD") || "CubillosOrtiz1",
        database: configService.get<string>("DB_NAME") || "usersMovies",
        entities: [__dirname + "/../**/*.entity{.ts,.js}"],
        synchronize: true,
      }),
    }),
    TypeOrmModule.forFeature([User]),
  ],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
