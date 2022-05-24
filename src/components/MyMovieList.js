import React from "react";

const MyMovieList = (props) => {
    return (
        <>
            {props.myMovies.map((myMovie, index) => (
            <div className='poster'>
                <img src={myMovie.Poster} alt={myMovie.Title}></img>
                </div>
            ))}
        </>
    )
}
export default MyMovieList;