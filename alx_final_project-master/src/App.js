import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; 
import Header from './Header';
import Footer from './Footer';
import LandingPage from './LandingPage';
import Watchlist from './Watchlist';
import PopularMovies from './PopularMovies';
import MovieDetails from './MovieDetails';
import MovieSearch from './MovieSearch';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Include the Header component here */}
        <Header />

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">MovieApp</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" to="/popular">Popular Movies</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/watchlist">Watchlist</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/search">Search</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Main content rendered by Routes */}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/popular" element={<PopularMovies />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route path="/watchlist" element={<Watchlist />} />
          <Route path="/search" element={<MovieSearch />} />
        </Routes>

        {/* Include the Footer component here */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;

