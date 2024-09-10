import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";
import { Movie } from "src/interfaces/movies.interfaces";

@Injectable()
export class MoviesService {
  private readonly token: string =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOTA1MjY2MDcwNmVkNWQ2ZGIxNDFkMTUyMDM4MmIzMSIsIm5iZiI6MTcyNTU0NjEwMC4yNjA4Nywic3ViIjoiNjZkOWJjZDJkN2MxOWVhODY2YjhkMzAxIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.BajEucpldSGZMc_EjKj4YQS9zhISXWCUzPTpFNAcDyU";
  constructor(private readonly httpService: HttpService) {}

  public getMovies( page: number = 1): Promise<Movie[]> {
    return new Promise<Movie[]>((resolve, reject) => {
      const request = this.httpService.get<Movie[]>(
        `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc`,
        {
          headers: {
            Authorization: `Bearer ${this.token}`,
          },
        },
      );

      request.subscribe({
        next: (response) => resolve(response.data),
        error: (err) => reject(err),
      });
    });
  }

  public getMovieId(id: number): Promise<Movie> {
    return new Promise<Movie>((resolve, reject) => {
      const request = this.httpService.get<Movie>(
        `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
        {
          headers: {
            Authorization: `Bearer ${this.token}`,
          },
        },
      );

      request.subscribe({
        next: (response) => resolve(response.data),
        error: (err) => reject(err),
      });
    });
  }

  public createMovies(movie: any) {
    console.log(movie);
    return "Creando movies";
  }

}
