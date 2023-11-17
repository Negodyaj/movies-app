import { Movie } from "../../models/movie";
import "./MovieCard.scss";

type MovieCardProps = {
  movie: Movie;
  someSecretValue: number;
};

export function MovieCard(props: MovieCardProps) {
  const movie = props.movie;

  return (
    <div className="movie-card">
      {props.someSecretValue}
      <img src="${movie.imageSrc}" alt="" />
      <div className="card-content">
        <div className="movie-details">
          <div className="movie-tags">{movie.tags.join(", ")}</div>
          <div className="title">{movie.name}</div>
          <div className="rating">
            IMDB:<span>{movie.imdb}</span>
          </div>
          <div className="description">{movie.description}</div>
        </div>
        <div className="movie-links">
          <a href="${movie.watchUrl}" className="link-button small">
            Watch
          </a>
          <a
            href="${movie.detailsUrl}"
            className="link-button small with-border"
          >
            Details
          </a>
        </div>
      </div>
    </div>
  );
}
