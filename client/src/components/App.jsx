import React, {useState} from 'react';
import movieData from '/client/src/data/movieData.js'
import MovieList from './movieList.jsx'
import Search from './Search.jsx'
import Add from './Add.jsx'

var App = () => {

  const [movies, setMovies] = useState(movieData);
  const [query, setQuery] = useState('');
  const [addMovie, setAddMovie] = useState('');

  const searchHandler = (e) => {
    setQuery(e.target.value);
  }

  const handleClick = (e) => {
    e.preventDefault();

    var filterMovies = movies.filter((movie) => {
      return movie.title.includes(query)});
    setMovies(filterMovies);
  }

  const addHandler = (e) => {
    setAddMovie(e.target.value);
  }

  const addClick = (e) => {
    e.preventDefault();
    var addedMovie = movies.concat([{title: addMovie}]);
    console.log(addedMovie)
    return setMovies(addedMovie);
  }

  const watchedClick = () => {
    var filterByWatched = movies.filter((movie) => {
      return movie.status.includes('Watched');
    })
    setMovies(filterByWatched);
  }

  const toWatchClick = () => {
    var filterToWatch = movies.filter((movie) => {
      return movie.status.includes('to watch');
    })
    setMovies(filterToWatch);
  }




  return (
    <div>
      <h1>Movie List</h1>
      <br></br>
        <Add addHandler={(e) => addHandler(e)} addClick={addClick}/>
      <br></br>
        <Search searchHandler={(e) => searchHandler(e)} handleClick={handleClick} />
      <br></br>
      <button onClick={watchedClick}>Watched</button>
      <button onClick={toWatchClick}>to watch</button>
      <div>
        <MovieList movies={movies} />
      </div>
    </div>
  );
};

export default App;