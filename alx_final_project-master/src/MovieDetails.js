import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [trailer, setTrailer] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        // Fetch movie details
        const movieRes = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=504a45076accb0f6d28e87336662450d`);
        setMovie(movieRes.data);

        // Fetch trailer
        const trailerRes = await axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=504a45076accb0f6d28e87336662450d`);
        
        // Filter for the trailer
        const trailerVideo = trailerRes.data.results.find(video => video.type === "Trailer" && video.site === "YouTube");
        
        // If trailer exists, set it
        setTrailer(trailerVideo ? `https://www.youtube.com/embed/${trailerVideo.key}` : null);
      } catch (error) {
        console.error('Error fetching movie details or trailer:', error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="img-fluid" />
        </div>
        <div className="col-md-8">
          <h2>{movie.title}</h2>
          <p>{movie.overview}</p>

          {trailer ? (
            <div className="embed-responsive embed-responsive-16by9">
              <iframe
                className="embed-responsive-item"
                src={trailer}
                allowFullScreen
                title="Movie Trailer"
              ></iframe>
            </div>
          ) : (
            <p>No trailer available for this movie.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;

