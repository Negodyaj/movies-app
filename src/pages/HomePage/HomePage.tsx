import { useEffect, useState } from "react";
import { MovieCard } from "../../components/MovieCard/MovieCard";
import "./HomePage.scss";
import { mockMovies } from "./mockMovies";
import axios from "axios";
import { sendGetRequest } from "../../services/api.service";

type HomePageProps = {
  handler: () => void;
};

export function HomePage(props: HomePageProps) {
  const [movies, setMovies] = useState(mockMovies);

  useEffect(() => {
    const fetchData = async () => {
      const users = await sendGetRequest("/users");

      const newMovies = movies.map((movie, index) => {
        const newMovie = { ...movie };
        newMovie.director = users[index].name;
        return newMovie;
      });
      setMovies(newMovies);
    };
    fetchData();
  }, []);

  return (
    <section className="home-page">
      <div>HomePage works! o_O</div>
      {movies.map((movie, index) => (
        <MovieCard
          key={`movie-${index}`}
          movie={movie}
          someSecretValue={index}
        />
      ))}
      <button onClick={props.handler}>HomePage press me</button>
    </section>
  );
}
