import React, {useState} from 'react';

var MovieListEntry = ({movie}) => {
  const [watched, setWatched] = useState(movie.status)
  const watchClick = (e) => {
    e.preventDefault();
    return watched === 'to watch' ? setWatched('Watched') : setWatched('to watch');
  }
  return (
    <div className="movieListEntry"
      style={{
        paddingTop:25,
        paddingBottom:25,
        border: '1px solid grey',
        borderRadius:1,
        marginRight:45
      }} >
        {movie.title}
      <button
        style={{
          position:'absolute',
          right:80,
          backgroundColor: "#5ab812",
          color: "white",
          borderRadius:5
          }}
           onClick={watchClick} >{watched}
      </button>
    </div>
  )
};

export default MovieListEntry;