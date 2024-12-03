import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from "./MovieList"

const SecondaryContainer = () => {
  const movies=useSelector(store=>store?.movies)
  const addMovieShimmer=useSelector(store=>store?.movies?.addNowPlayingMovies)
  
  if (movies.length===0) {
    return(
      <div>
        <h1>Loadnig bro... wait</h1>
      </div>
    )
  }
    return (
        <div className='bg-black '>
            <div className='-mt-48 relative z-20'>
            {addMovieShimmer ? <MovieList title={"Now Playing"} movies={movies?.addNowPlayingMovies}/> : <h1 className='p-4 m-4 bg-white'>Loading</h1>}
            <MovieList title={"Top-Rated videos"} movies={movies?.addTopRated}/>
            <MovieList title={"Popular"} movies={movies?.addPopular}/>
            <MovieList title={"Up-Coming Movies"} movies={movies?.addUpcoming}/>
            <MovieList title={"Now Playing"} movies={movies?.addNowPlayingMovies}/>
            <MovieList title={"Now Playing"} movies={movies?.addNowPlayingMovies}/>
            <MovieList title={"Now Playing"} movies={movies?.addNowPlayingMovies}/>
            <MovieList title={"Now Playing"} movies={movies?.addNowPlayingMovies}/>

            </div>
        </div>
  )
}

export default SecondaryContainer