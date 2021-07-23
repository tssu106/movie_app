import React from 'react';
import PropTypes from 'prop-types';

const Movie = ({id, title, summary, poster, year, genres}) => {
    return (
        <div className="movie">
            <h4>Title : {title}</h4>
            <div className="imgWrapper">
                <img src={poster} alt={title} align="center"></img>
            </div>
            <h5>year: {year}</h5>
            <h5>genre : {genres.map((genre)=>{return genre+"  "})}</h5>
            <h5>summary: {summary.length > 400 ? summary.substring(0, 399) + "..." : summary}</h5>
        </div>
    );
}

Movie.prototypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    genres: PropTypes.array.isRequired
}

export default Movie;