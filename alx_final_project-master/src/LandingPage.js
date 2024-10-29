import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

function LandingPage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Fetch popular movies from TMDB API
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=504a45076accb0f6d28e87336662450d`)
      .then(response => response.json())
      .then(data => setMovies(data.results));
  }, []);

  return (
    <div className="landing-page">
      <header className="hero-section text-center py-5">
        <h1 className="display-4">Welcome to MovieApp</h1>
        <p className="lead">Discover the most popular movies and add your favorites to your watchlist!</p>
      </header>

      <div className="container mt-5">
        <h2 className="text-center mb-4">Popular Movies</h2>
        <div className="row">
          {movies.map(movie => (
            <div key={movie.id} className="col-md-3 mb-4">
              <Link to={`/movie/${movie.id}`}>
                <div className="card">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    className="card-img-top"
                    alt={movie.title}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{movie.title}</h5>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LandingPage;

