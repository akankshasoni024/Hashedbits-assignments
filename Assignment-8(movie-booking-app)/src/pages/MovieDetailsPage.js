import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './MovieDetailsPage.css'; // optional for styling

const MovieDetailsPage = () => {
  const { id } = useParams(); // id = imdbID
  const [movie, setMovie] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMovie = async () => {
      const res = await fetch(`https://www.omdbapi.com/?i=${id}&apikey=75428cb7`);
      const data = await res.json();
      setMovie(data);
    };

    fetchMovie();
  }, [id]);

  if (!movie) return <div>Loading...</div>;
  if (movie.Response === "False") return <div>Movie not found.</div>;

  return (
    <div className="movie-details-page">
      <h1>{movie.Title}</h1>
      <img src={movie.Poster} alt={movie.Title} />
      <p><strong>Plot:</strong> {movie.Plot}</p>
      <p><strong>Genre:</strong> {movie.Genre}</p>
      <p><strong>Year:</strong> {movie.Year}</p>
      <p><strong>IMDB Rating:</strong> {movie.imdbRating}</p>
      <button onClick={() => navigate(`/book/${movie.imdbID}`)}>
        Book Seat
      </button>
    </div>
  );
};

export default MovieDetailsPage;
