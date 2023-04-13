import React from 'react';

var Search = ({searchHandler, handleClick}) => (
  <form>
    <input className="searchBar" onChange={(e) => searchHandler(e)} type="text" placeholder="Search..."/>
    <button onClick={handleClick}>Go!</button>
  </form>
);

export default Search;