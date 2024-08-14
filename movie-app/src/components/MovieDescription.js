import React from 'react';
import { useParams, Link } from 'react-router-dom';

const MovieDescription = ({ movies }) => {
    const { id } = useParams();
    const movie = movies.find((m) => m.id.toString() === id);

    return (
        <div>
            <h1>{movie.title}</h1>
            <p>{movie.description}</p>
            <iframe
                width="560"
                height="315"
                src={movie.trailerURL}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
            <br />
            <Link to="/">Back to Home</Link>
        </div>
    );
};

export default MovieDescription;
