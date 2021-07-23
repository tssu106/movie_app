import React from 'react';
import PropTypes from 'prop-types';

const Movie = ({title, summary, poster, year, genres}) => {
    return (
        <div className="movie">
            <h4>{title}</h4>
            <div className="imgWrapper">
                <img src={poster} alt={title} align="center"></img>
            </div>
            <h5>year: {year}</h5>
            <h6>genre : {genres.map((genre)=>{return genre+"  "})}</h6>
            <h5>summary: {summary.length > 400 ? summary.substring(0, 399) + "..." : summary}</h5>
        </div>
    );
}

Movie.prototypes = {
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;