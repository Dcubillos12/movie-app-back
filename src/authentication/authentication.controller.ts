import { Body, Controller, Get, Post, Request, UseGuards } from "@nestjs/common";
import { AuthGuard } from "src/guard/guard.guard";
import { AuthenticationService } from "./authentication.service";
import { RegisterDto } from "./dto/resgister.dto";
import { LoginDto } from "./dto/login.dto";

@Controller("auth")
export class AuthenticationController {
  constructor(private readonly authenticationService: AuthenticationService) {}

  @Post("register")
  register(@Body() registerDto: RegisterDto) {
    console.log(registerDto);
    return this.authenticationService.register(registerDto);
  }

  @Post("login")
  login(@Body() loginDto: LoginDto) {
    return this.authenticationService.login(loginDto);
  }

  @Get("profile")
  @UseGuards(AuthGuard)
  profile(@Request() req) {
    return req.user;
  }
}
