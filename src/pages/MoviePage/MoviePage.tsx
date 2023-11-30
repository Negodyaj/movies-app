import { useParams } from "react-router-dom";
import "./MoviePage.scss";

import React, { useEffect, useState } from "react";
import {
  getMovieDetails,
  getSimilarMovies,
} from "../../services/movieDetailsProvider";
import { Movie } from "../../models/movie";
import { MovieCard } from "../../components/MovieCard/MovieCard";

export const MoviePage = () => {
  const [counter, setCounter] = useState(42);
  const [foundMovie, setFoundMovie] = useState<Movie | undefined>(undefined);
  const [similarMovies, setSimilarMovies] = useState<Movie[]>([]);
  const { movieId } = useParams();

  useEffect(() => {
    const foundMovie = getMovieDetails(+movieId!);
    setFoundMovie(foundMovie);
    console.log(foundMovie);
  }, [movieId]);

  useEffect(() => {
    const similarMovies = getSimilarMovies(+movieId!);
    setSimilarMovies(similarMovies);
    console.log(similarMovies);
  }, [movieId]);

  return (
    <div className="movie-page">
      <h1>MoviePage</h1>
      <div>Counter: {counter}</div>
      <button onClick={() => setCounter(counter + 1)}>increase</button>
      <div>Description: {foundMovie?.description}</div>
      <h2>You might also like these:</h2>
      {similarMovies.map((movie) => (
        <MovieCard movie={movie} someSecretValue={0} />
      ))}
    </div>
  );
};
