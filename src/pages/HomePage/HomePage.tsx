import { MovieCard } from "../../components/MovieCard/MovieCard";
import "./HomePage.scss";

type HomePageProps = {
  handler: () => void;
};

export function HomePage(props: HomePageProps) {
  const movies = [
    {
      id: 7,
      name: "Batman Begins",
      imdb: 8.2,
      description: `Batman Begins explores the origins of the Batman legend and the Dark Knight's emergence as a force...`,
      watchUrl: "url1",
      detailsUrl: "url2",
      imageSrc: "./images/movie1.png",
      tags: ["action", "adventure"],
    },
    {
      id: 278,
      name: "The Dark Knight",
      imdb: 9.0,
      description: `Christian Bale and director Christopher Nolan reunite following their blockbuster success with...`,
      watchUrl: "url1",
      detailsUrl: "url2",
      imageSrc: "./images/movie2.png",
      tags: ["action", "crime", "drama"],
    },
    {
      id: 71,
      name: "The Dark Knight Rises",
      imdb: 8.4,
      description: `Directing one of the most anticipated films of the year, Christopher Nolan returns to Gotham to complete his...`,
      watchUrl: "url1",
      detailsUrl: "url2",
      imageSrc: "./images/movie3.png",
      tags: ["action", "adventure"],
    },
    {
      id: 31,
      name: "Batman Begins 2",
      imdb: 8.2,
      description: `Batman Begins explores the origins of the Batman legend and the Dark Knight's emergence as a force...`,
      watchUrl: "url1",
      detailsUrl: "url2",
      imageSrc: "./images/movie1.png",
      tags: ["action", "adventure"],
    },
    {
      id: 85,
      name: "The Dark Knight 2",
      imdb: 9.0,
      description: `Christian Bale and director Christopher Nolan reunite following their blockbuster success with...`,
      watchUrl: "url1",
      detailsUrl: "url2",
      imageSrc: "./images/movie2.png",
      tags: ["action", "crime", "drama"],
    },
  ];

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
