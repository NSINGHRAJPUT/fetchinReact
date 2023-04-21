import React from 'react';

import classes from './Movie.module.css';

const Movie = (props) => {
const deleteMovie = (e) =>{
  e.preventDefault();
  props.deleteMovieHandler(e.target.value);
}

  return (
    <li className={classes.movie}>
      <h2>{props.title}</h2>
      <h3>{props.releaseDate}</h3>
      <p>{props.openingText}</p>
      <div>
        <button onClick={deleteMovie} value={props.id}></button>
      </div>
    </li>
  );
};

export default Movie;
