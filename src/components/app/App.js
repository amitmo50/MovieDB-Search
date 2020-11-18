import React, {useState} from 'react';
import './App.css';
import MovieCard from '../movieCard/movieCard';
import TopBar from '../topBar/topBar';

function App() {
  const KEY = '8bdb07fb72b0e7d25c5f0b8c560508e4';
  const [movieObj, setMovieObj] = useState([]);
  
  const performSearch = async (movieName) =>{
    const API = `https://api.themoviedb.org/3/search/movie?query=${movieName}&api_key=${KEY}`;
    const resolve = fetch(API);
    const response =  (await resolve).json();
    const result = await response;
    setMovieObj(result.results);

  }
  const playMovieTrailer = async (id) => {
    const url = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${KEY}&language=en-US`;
    const resolve = fetch(url);
    const response = (await resolve).json();
    const result = await response;
    const videoKey = result.results[0].key;
    const videoUrl = `https://www.youtube.com/watch?v=${videoKey}`;
    window.location.href = videoUrl;
  }


  return (
    <div className="App">
      <TopBar performSearch={performSearch}/>
      <div className="cards-container">
        {movieObj.map((movie,index) => <MovieCard playMovieTrailer={playMovieTrailer} movie={movie} key={index}/>)}
      </div>
    </div>
  );
}

export default App;
