// In your MovieSearch component
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MovieSearch = () => {
    const [movies, setMovies] = useState([]);
    const [query, setQuery] = useState('');
    const [genres, setGenres] = useState([]);
    const [selectedGenre, setSelectedGenre] = useState('');
    const [loading, setLoading] = useState(false);

    const API_KEY = '504a45076accb0f6d28e87336662450d';

    useEffect(() => {
        async function fetchGenres() {
            const genreData = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`);
            setGenres(genreData.data.genres);
        }
        fetchGenres();
    }, []);

    const searchMovies = async () => {
        setLoading(true);
        try {
            const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}&with_genres=${selectedGenre}`);
            setMovies(res.data.results);
            setLoading(false);
        } catch (error) {
            console.error('Error searching movies:', error);
        }
    };

    return (
        <div>
            <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search movies..." />
            <select onChange={(e) => setSelectedGenre(e.target.value)}>
                <option value="">All Genres</option>
                {genres.map(genre => (
                    <option key={genre.id} value={genre.id}>{genre.name}</option>
                ))}
            </select>
            <button onClick={searchMovies}>Search</button>

            {loading ? <div>Loading...</div> : (
                <ul>
                    {movies.map(movie => (
                        <li key={movie.id}>{movie.title}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default MovieSearch;

