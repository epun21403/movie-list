import React from 'react';

var Add = ({addHandler, addClick}) => {
  return (
  <form>
    <input className="addBar" onChange={(e) => addHandler(e)} placeholder="Add movie title here"/>
    <button onClick={addClick} style={{backgroundColor: "#5ab812", color: "white", borderRadius:5}}>Add</button>
  </form>
  )
};

export default Add;