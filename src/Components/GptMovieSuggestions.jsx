import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from "./MovieList"
import Error from "./Error"

const GptMovieSuggestions = () => {
  
  const gpt=useSelector(store=>store.gpt);
  const {movieNames,movieLists}=gpt;
  if (!movieNames) return null;
  
  
      if (movieNames.length===0) {
        return(
          <Error/>
        )
      }
      return (
        <div className='p-4 m-4 bg-black text-white bg-opacity-80'>
          {/* <MovieList title={movieNames[0]} movies={movieLists[0]}/>
          <MovieList title={movieNames[1]} movies={movieLists[1]}/>
          <MovieList title={movieNames[2]} movies={movieLists[2]}/>
          <MovieList title={movieNames[3]} movies={movieLists[3]}/>
          <MovieList title={movieNames[4]} movies={movieLists[4]}/> */}

          {
            movieLists.map((movie,index)=><MovieList title={movieNames[index]} movies={movie} />)
          }
        </div>
      )
}

export default GptMovieSuggestions