import { useEffect, useState } from "react";
import { MovieCard } from "../../components/MovieCard/MovieCard";
import "./HomePage.scss";
import { mockMovies } from "./mockMovies";
import axios from "axios";

type HomePageProps = {
  handler: () => void;
};

export function HomePage(props: HomePageProps) {
  const [movies, setMovies] = useState(mockMovies);

  useEffect(() => {
    const fetchData = async () => {
      const usersResponse = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );

      const newMovies = movies.map((movie, index) => {
        const newMovie = { ...movie };
        newMovie.director = usersResponse.data[index].name;
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
