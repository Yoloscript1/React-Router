// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MovieList from './components/MovieList';
import Filter from './components/Filter';
import MovieDescription from './components/MovieDescription';

const App = () => {
    const [movies, setMovies] = useState([
        {
            id: 1,
            title: 'Inception',
            description: 'A mind-bending thriller',
            posterURL: 'inception.jpg',
            rating: 5,
            trailerURL: 'https://www.youtube.com/embed/YoHD9XEInc0',
        },
        {
            id: 2,
            title: 'The Dark Knight',
            description: 'The rise of the Dark Knight',
            posterURL: 'dark-knight.jpg',
            rating: 4,
            trailerURL: 'https://www.youtube.com/embed/EXeTwQWrcwY',
        },
        {
            id: 3,
            title: 'Interstellar',
            description: 'A journey beyond the stars',
            posterURL: 'interstellar.jpg',
            rating: 5,
            trailerURL: 'https://www.youtube.com/embed/zSWdZVtXT7E',
        },
    ]);

    const handleFilter = (filter) => {
        const filteredMovies = movies.filter((movie) => {
            const titleMatch = movie.title.toLowerCase().includes(filter.title.toLowerCase());
            const ratingMatch = movie.rating >= filter.rating;
            return titleMatch && ratingMatch;
        });

        setMovies(filteredMovies);
    };

    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <Filter onFilter={handleFilter} />
                            <MovieList movies={movies} />
                        </>
                    }
                />
                <Route path="/movie/:id" element={<MovieDescription movies={movies} />} />
            </Routes>
        </Router>
    );
};

export default App;

