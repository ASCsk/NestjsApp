import { Injectable } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MoviesService {

  private movies: Movie[] = []

  create(createMovieDto: CreateMovieDto) {
    const newMovie: Movie = {
      id: this.movies.length + 1,
      ...createMovieDto, // Spread the properties of createMovieDto
    };
    this.movies.push(newMovie)
    return newMovie;
  }

  findAll(): Movie[] {
    return this.movies;
  }

  findOne(id: number) {
    return this.movies.find(movie => movie.id === id);
  }

  update(id: number, updateMovieDto: UpdateMovieDto) {
    const movie = this.findOne(id);
    if (movie) {
      Object.assign(movie, updateMovieDto);  // Update the movie with new data
      return movie;
    }
    return null;
  }

  remove(id: number) {
    this.movies = this.movies.filter(movie => movie.id !== id);
  }
}
