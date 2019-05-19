import React from 'react';

const Movie = (props) => {

    return (
        <div className="movie">
            <img src={props.img} alt="placeholder"/>
            <h2> {props.name} </h2>
            <p> {props.description} </p>
        </div>
    );
}

export default Movie;