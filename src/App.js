import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from 'react';
import MyMovieList from './components/MyMovieList';


const App = (props) => {
  const [ myMovies, setMyMovies] = useState(
    [
      {
    "Title": "Romeo + Juliet",
    "Year": "1996",
    "imdbID": "tt0117509",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMGU4YmI1ZGQtZjExYi00M2E0LTgyYTAtNzQ5ZmVlMTk4NzUzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
},
{
  "Title": "Catch Me If You Can",
  "Year": "2002",
  "imdbID": "tt0264464",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BMTY5MzYzNjc5NV5BMl5BanBnXkFtZTYwNTUyNTc2._V1_SX300.jpg"
},
{
"Title": "The Great Gatsby",
"Year": "2013",
"imdbID": "tt1343092",
"Type": "movie",
"Poster": "https://m.media-amazon.com/images/M/MV5BMTkxNTk1ODcxNl5BMl5BanBnXkFtZTcwMDI1OTMzOQ@@._V1_SX300.jpg"
},
  ]);

  return ( 
<div>
    <div>
      <h1>My favorit films</h1>
      </div>
      <div className='items'>
   <MyMovieList myMovies={myMovies}/>
   </div>
   </div>
      
  );
};

export default App;
