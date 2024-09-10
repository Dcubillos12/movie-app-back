import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { HttpModule } from "@nestjs/axios";
import { MoviesModule } from "./movies/movies.modules";
import { UsersModule } from "./users/users.module";
import { AuthenticationController } from "./authentication/authentication.controller";
import { AuthenticationService } from "./authentication/authentication.service";
import { AuthenticationModule } from "./authentication/authentication.module";


@Module({
  imports: [HttpModule, MoviesModule, UsersModule, AuthenticationModule],
  controllers: [AppController, AuthenticationController],
  providers: [AppService, AuthenticationService],
})
export class AppModule {}
