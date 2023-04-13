import React from 'react';
import MovieListEntry from './MovieListEntry.jsx';

const MovieList = ({movies}) => {
  return (
    <div>
      {movies.map((movie, index) => (
        <MovieListEntry movie={movie.title} key={index}/>
      ))}
    </div>
  )};

export default MovieList;