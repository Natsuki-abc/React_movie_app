import React from "react";
import "./App.css";
import { Link } from "react-router";

type Movie = {
  id: number;
  poster_path?: string;
  original_title: string;
};

type Props = {
  movie: Movie;
};

const MovieCard: React.FC<Props> = ({ movie }) => (
  <Link to={`/movies/${movie.id}`} className="movie-card">
    <div className="movie-card__imgwrap">
      <img
        src={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w300_and_h450_bestv2${movie.poster_path}`
            : "https://via.placeholder.com/300x450?text=No+Image"
        }
        alt={movie.original_title}
        className="movie-card__image"
      />
      <div className="movie-card__overlay">
        <h3 className="movie-card__title">{movie.original_title}</h3>
      </div>
    </div>
  </Link>
);

export default MovieCard;
