import { Body, Controller, Get, HttpCode, Param, Post, Put, Query, UseGuards } from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/create-users.dto";
import { UpdateUserDto } from "./dto/update-users.dto";

@Controller("/users")
export class UsersController {
  constructor(private userService: UsersService) {}
  @Get()
  getAllUsers() {
    return this.userService.getUsers();
  }

  @Get("/:id")
  getUserId(@Param("id") id: string) {
    return this.userService.getUserId(parseInt(id));
  }

  @Post()  
  createUser(@Body() user: CreateUserDto) {
    return this.userService.createUser(user);
  }

  @Put("/:id")
  updateUser( @Body() user: UpdateUserDto) {
    return this.userService.updateUser(user);
  }

  @Get("not-found")
  @HttpCode(404)
  notFountPage() {
    return "404 not found";
  }

  @Get("server-error")
  @HttpCode(500)
  serverErrorPage() {
    return "500 server error";
  }
}
