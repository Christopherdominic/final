import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const PopularMovies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=504a45076accb0f6d28e87336662450d`);
      setMovies(res.data.results);
    };
    fetchMovies();
  }, []);

  return (
    <div className="container">
      <h1>Popular Movies</h1>
      <div className="row">
        {movies.map(movie => (
          <div className="col-md-3 mb-4" key={movie.id}>
            <Link to={`/movies/${movie.id}`}>
              <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="img-fluid" />
              <h5>{movie.title}</h5>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularMovies;

