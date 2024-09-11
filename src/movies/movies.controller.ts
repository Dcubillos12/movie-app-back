import { Body, Controller, Delete, Get, Patch, Post, Put } from "@nestjs/common";
import { MoviesService } from "./movies.service";
import type { Movie } from "src/interfaces/movies.interfaces";

@Controller("/movies")
export class MoviesController {
  constructor(private readonly movisService: MoviesService) {}
  @Get()
  getAllMovies(page: number): Promise<Movie[]> {
    return this.movisService.getMovies(page);
  }

  @Post()
  createMovies(@Body() movie: any) {
    return this.movisService.createMovies(movie);
  }

  @Put()
  updateMovies() {
    return "Actuliazando movies";
  }

  @Delete()
  deleteMovies() {
    return "Eliminando movies";
  }

  @Patch()
  deleteMoviesStatus() {
    return "Actuliazando status movies";
  }
}
