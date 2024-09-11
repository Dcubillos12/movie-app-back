import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import morgan from "morgan";
async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);
  app.use(morgan("dev"));
  const configService = app.get(ConfigService);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );
  await app.listen(configService.get("PORT") || 3000);
}
void bootstrap();
