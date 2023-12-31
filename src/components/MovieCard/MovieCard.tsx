import { Link } from "react-router-dom";
import { Movie } from "../../models/movie";
import "./MovieCard.scss";
import { selectCount } from "../../store/counter.slice";
import { useAppSelector } from "../../store/hooks";

type MovieCardProps = {
  movie: Movie;
  someSecretValue: number;
};

export function MovieCard(props: MovieCardProps) {
  const counter = useAppSelector(selectCount);
  const movie = props.movie;

  return (
    <div className="movie-card">
      {counter}
      <img src="${movie.imageSrc}" alt="" />
      <div className="card-content">
        <div className="movie-details">
          <div className="movie-tags">{movie.tags.join(", ")}</div>
          <div className="title">{movie.name}</div>
          <div>{movie.director}</div>
          <div className="rating">
            IMDB:<span>{movie.imdb}</span>
          </div>
          <div className="description">{movie.description}</div>
        </div>
        <div className="movie-links">
          <a href="${movie.watchUrl}" className="link-button small">
            Watch
          </a>
          <Link
            to={`/movie/${movie.id}`}
            className="link-button small with-border"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
}
