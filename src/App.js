import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Movie from './components/Movie';
import Loading from './components/Loading';
import "./App.css";

const App = ()=>{
  const [isLoading, setIsLoading] = useState(true);
  const [moviesData, setMoviesData] = useState([]);
  useEffect(()=>{
    async function fetchMovies(){
      const {data:{data:{movies}}} =  await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
      setMoviesData(movies);
      setIsLoading(false);
    }
    fetchMovies();
  },[])

  const renderMovie = moviesData.map((movie)=>{
    console.log(movie);
    return <Movie key={movie.id} id={movie.id} title={movie.title} summary={movie.summary} year={movie.year} genres={movie.genres} poster={movie.medium_cover_image}></Movie>
  })

  return (
    <div className="movie_wrapper">
      {isLoading ? <Loading/> : renderMovie}
    </div>
  );
}

export default App;
