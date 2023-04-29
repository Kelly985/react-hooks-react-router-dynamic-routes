import React from "react";
import { useParams } from "react-router-dom";

function MovieShow({ movies }) {
  const { movieId } = useParams();
  const movie = movies[movieId];

  return (
    <div>
      <h2>{movie.title}</h2>
      <p>ID: {movie.id}</p>
    </div>
  );
}

export default MovieShow;
