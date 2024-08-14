import React, { useState } from 'react';

const AddMovie = ({ onAdd }) => {
    const [newMovie, setNewMovie] = useState({
        title: '',
        description: '',
        posterURL: '',
        rating: '',
        trailerURL: '',
    });

    const handleChange = (e) => {
        setNewMovie({ ...newMovie, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onAdd(newMovie);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="title"
                placeholder="Title"
                value={newMovie.title}
                onChange={handleChange}
            />
            <input
                type="text"
                name="description"
                placeholder="Description"
                value={newMovie.description}
                onChange={handleChange}
            />
            <input
                type="text"
                name="posterURL"
                placeholder="Poster URL"
                value={newMovie.posterURL}
                onChange={handleChange}
            />
            <input
                type="number"
                name="rating"
                placeholder="Rating"
                value={newMovie.rating}
                onChange={handleChange}
            />
            <input
                type="text"
                name="trailerURL"
                placeholder="Trailer URL"
                value={newMovie.trailerURL}
                onChange={handleChange}
            />
            <button type="submit">Add Movie</button>
        </form>
    );
};

export default AddMovie;
