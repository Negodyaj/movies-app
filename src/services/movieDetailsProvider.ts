import { Movie } from "../models/movie";

export const getMovieDetails = (movieId: number): Movie => {
  // long operation here
  console.log("performing really long operation");
  return {
    id: 31,
    name: "Batman Begins 2",
    imdb: 8.2,
    description: `Batman Begins explores the origins of the Batman legend and the Dark Knight's emergence as a force...`,
    watchUrl: "url1",
    detailsUrl: "url2",
    imageSrc: "./images/movie1.png",
    tags: ["action", "adventure"],
  };
};

export const getSimilarMovies = (movieId: number): Movie[] => {
  // long operation here
  console.log("performing one more really long operation");
  return [];
};
