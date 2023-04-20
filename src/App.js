import React, { useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies,setMovies] = useState([]);

  function fetchMovies (){
    fetch('https://swapi.dev/api/films').then((respone)=>{
      return respone.json();
    })
    .then((data)=>{
      const transformedMovies = data.results.map((moviesData)=> {
        return {
          id:moviesData.episode_id,
          title:moviesData.title,
          openingText:moviesData.opening_crawl,
          releaseDate:moviesData.release_date
        };
      })
      setMovies(transformedMovies)
    })
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMovies} >Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={movies} />
      </section>
    </React.Fragment>
  );
}

export default App;
