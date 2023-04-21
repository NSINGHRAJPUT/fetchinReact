import React, { useEffect, useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies,setMovies] = useState([]);
  const [isLoading,setIsLoading] = useState(false);
  const [error,setError] = useState(null);
  useEffect(()=>{
    fetchMovies();
  },[])

  async function fetchMovies (){
    setIsLoading(true)
    setError(null);
    try{
      const response = await fetch('https://swapi.dev/api/films/')
      if(!response.ok){
        throw new Error('Something went Wrong ... RETRYING')
      }
      const data = await response.json();
      const transformedMovies = data.results.map((moviesData)=> {
            return {
              id:moviesData.episode_id,
              title:moviesData.title,
              openingText:moviesData.opening_crawl,
              releaseDate:moviesData.release_date
            };
          })
          setMovies(transformedMovies) 
      }catch(error){
        setError(error.message)
      }
      setIsLoading(false) 
}
let content = <p>Found No Movies.</p>;
let ers = <div> {setInterval(async () =>{
  const x = await fetch('https://swapi.dev/api/films/')
  const dt = await x.json();
  const fetchedMovies = dt.results.map((moviesdt)=>{
    return {
      id:moviesdt.episode_id,
      title:moviesdt.title,
      openingText:moviesdt.opening_crawl,
      releaseDate:moviesdt.release_date
    };
  })
  setMovies(fetchedMovies) 
},5000)}{<button >Cancel Retrying</button>}</div>

if(error){
  content = <p>{error}{ers}</p>
}
if(movies.length>0){
  content = <MoviesList movies={movies} />
}
if(isLoading){
  content=<p>Loading....</p>
}

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMovies} >Fetch Movies</button>
      </section>
      <section>
      {content}
      </section>
    </React.Fragment>
  );
}

export default App;
