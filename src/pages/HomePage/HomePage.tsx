import { useEffect, useState } from "react";
import { MovieCard } from "../../components/MovieCard/MovieCard";
import "./HomePage.scss";
import { mockMovies } from "./mockMovies";

type HomePageProps = {
  handler: () => void;
};

export function HomePage(props: HomePageProps) {
  const [movies, setMovies] = useState(mockMovies);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const users = await response.json();

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
